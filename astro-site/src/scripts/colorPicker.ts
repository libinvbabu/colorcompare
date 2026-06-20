/**
 * A lightweight custom color picker popover.
 *
 * Why custom: the native <input type="color"> popup is positioned by the
 * browser and routinely covers tool results. This popover is appended to
 * <body>, escapes overflow containers, and flips above/below + clamps to the
 * viewport so it never hides relevant content.
 *
 * A single popover instance is shared across all triggers on the page.
 */
import {
  normalizeHex,
  hexToRgb,
  rgbToHex,
  rgbToHsv,
  hsvToRgb,
  type HSV,
} from "../utils/color";

interface PickerHandle {
  setValue(hex: string): void;
  getValue(): string;
}

interface ActiveState {
  trigger: HTMLElement;
  onInput: (hex: string) => void;
  hsv: HSV;
}

let popover: HTMLElement | null = null;
let els: {
  sv: HTMLElement;
  svThumb: HTMLElement;
  hue: HTMLInputElement;
  hex: HTMLInputElement;
  eye: HTMLButtonElement;
} | null = null;
let active: ActiveState | null = null;

declare global {
  interface Window {
    EyeDropper?: new () => { open(): Promise<{ sRGBHex: string }>; };
  }
}

function build() {
  if (popover) return;
  popover = document.createElement("div");
  popover.className = "ccp";
  popover.setAttribute("role", "dialog");
  popover.setAttribute("aria-label", "Color picker");
  popover.hidden = true;
  popover.innerHTML = `
    <div class="ccp__sv" data-sv tabindex="0" role="slider" aria-label="Saturation and brightness">
      <span class="ccp__sv-thumb" data-sv-thumb></span>
    </div>
    <div class="ccp__row">
      <button type="button" class="ccp__eye" data-eye aria-label="Pick from screen" hidden>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 22 1-1h3l9-9"/><path d="M3 21v-3l9-9"/><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"/></svg>
      </button>
      <input type="range" min="0" max="360" class="ccp__hue" data-hue aria-label="Hue" />
    </div>
    <div class="ccp__foot">
      <span class="ccp__preview" data-preview></span>
      <input type="text" class="ccp__hex cc-mono" data-hex aria-label="Hex value" spellcheck="false" autocomplete="off" />
    </div>
  `;
  document.body.appendChild(popover);
  els = {
    sv: popover.querySelector("[data-sv]")!,
    svThumb: popover.querySelector("[data-sv-thumb]")!,
    hue: popover.querySelector("[data-hue]")!,
    hex: popover.querySelector("[data-hex]")!,
    eye: popover.querySelector("[data-eye]")!,
  };

  if (window.EyeDropper) els.eye.hidden = false;

  // Saturation/Value drag
  let dragging = false;
  const onSvMove = (e: PointerEvent) => {
    if (!dragging || !active || !els) return;
    const rect = els.sv.getBoundingClientRect();
    const x = Math.min(rect.width, Math.max(0, e.clientX - rect.left));
    const y = Math.min(rect.height, Math.max(0, e.clientY - rect.top));
    active.hsv.s = x / rect.width;
    active.hsv.v = 1 - y / rect.height;
    syncFromHsv();
  };
  els.sv.addEventListener("pointerdown", (e) => {
    dragging = true;
    els!.sv.setPointerCapture(e.pointerId);
    onSvMove(e);
  });
  els.sv.addEventListener("pointermove", onSvMove);
  els.sv.addEventListener("pointerup", () => (dragging = false));

  // Hue
  els.hue.addEventListener("input", () => {
    if (!active) return;
    active.hsv.h = Number(els!.hue.value);
    syncFromHsv();
  });

  // Hex input
  els.hex.addEventListener("input", () => {
    const norm = normalizeHex(els!.hex.value);
    if (norm && active) {
      active.hsv = rgbToHsv(hexToRgb(norm)!);
      syncFromHsv(false);
    }
  });

  // EyeDropper
  els.eye.addEventListener("click", async () => {
    if (!window.EyeDropper || !active) return;
    try {
      const res = await new window.EyeDropper().open();
      const norm = normalizeHex(res.sRGBHex);
      if (norm) {
        active.hsv = rgbToHsv(hexToRgb(norm)!);
        syncFromHsv();
      }
    } catch {
      /* user cancelled */
    }
  });

  // Dismiss
  document.addEventListener("pointerdown", (e) => {
    if (!popover || popover.hidden) return;
    const t = e.target as Node;
    if (popover.contains(t) || (active && active.trigger.contains(t))) return;
    close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
  window.addEventListener("scroll", () => popover && !popover.hidden && reposition(), true);
  window.addEventListener("resize", () => popover && !popover.hidden && reposition());
}

function syncFromHsv(updateHexField = true) {
  if (!active || !els) return;
  const rgb = hsvToRgb(active.hsv);
  const hex = rgbToHex(rgb);
  els.sv.style.setProperty("--hue", String(active.hsv.h));
  els.svThumb.style.left = `${active.hsv.s * 100}%`;
  els.svThumb.style.top = `${(1 - active.hsv.v) * 100}%`;
  els.svThumb.style.background = hex;
  els.hue.value = String(active.hsv.h);
  (popover!.querySelector("[data-preview]") as HTMLElement).style.background = hex;
  if (updateHexField) els.hex.value = hex.toUpperCase();
  active.trigger.style.background = hex;
  active.onInput(hex);
}

function reposition() {
  if (!popover || !active) return;
  const r = active.trigger.getBoundingClientRect();
  const pw = popover.offsetWidth || 244;
  const ph = popover.offsetHeight || 250;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const gap = 8;

  // Prefer a side flyout (right, then left) so the picker sits BESIDE the
  // swatch and never covers the results that sit below it. Fall back to
  // below/above only on narrow screens where there's no horizontal room.
  let left: number;
  let top: number;
  if (r.right + gap + pw <= vw - 8) {
    left = r.right + gap; // right flyout
    top = r.top;
  } else if (r.left - gap - pw >= 8) {
    left = r.left - gap - pw; // left flyout
    top = r.top;
  } else {
    // Stacked fallback: below if it fits, else above.
    left = Math.min(Math.max(8, r.left), vw - pw - 8);
    top = r.bottom + gap;
    if (top + ph > vh - 8) top = Math.max(8, r.top - ph - gap);
  }
  // Keep within the viewport vertically.
  if (top + ph > vh - 8) top = Math.max(8, vh - ph - 8);
  top = Math.max(8, top);

  popover.style.top = `${top}px`;
  popover.style.left = `${left}px`;
}

function open(state: ActiveState) {
  build();
  active = state;
  popover!.hidden = false;
  syncFromHsv();
  reposition();
}

function close() {
  if (popover) popover.hidden = true;
  active = null;
}

export function attachColorPicker(opts: {
  trigger: HTMLElement;
  value: string;
  onInput: (hex: string) => void;
}): PickerHandle {
  const norm = normalizeHex(opts.value) ?? "#000000";
  opts.trigger.style.background = norm;
  let currentHex = norm;
  const handler = (hex: string) => {
    currentHex = hex;
    opts.onInput(hex);
  };

  opts.trigger.addEventListener("click", (e) => {
    e.preventDefault();
    // Toggle: if already open for this trigger, close.
    if (active && active.trigger === opts.trigger && popover && !popover.hidden) {
      close();
      return;
    }
    open({
      trigger: opts.trigger,
      onInput: handler,
      hsv: rgbToHsv(hexToRgb(currentHex)!),
    });
  });

  return {
    setValue(hex: string) {
      const n = normalizeHex(hex);
      if (!n) return;
      currentHex = n;
      opts.trigger.style.background = n;
      if (active && active.trigger === opts.trigger) {
        active.hsv = rgbToHsv(hexToRgb(n)!);
        syncFromHsv();
      }
    },
    getValue() {
      return currentHex;
    },
  };
}
