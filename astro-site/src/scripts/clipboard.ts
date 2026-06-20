/** Copy text to the clipboard, with a legacy fallback. */
export async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through to legacy */
  }
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

/** Briefly flip a copy button into a "Copied" state. */
export function flashCopied(btn: HTMLElement, label = "Copied") {
  const original = btn.dataset.originalLabel ?? btn.textContent ?? "";
  if (!btn.dataset.originalLabel) btn.dataset.originalLabel = original;
  btn.textContent = label;
  btn.setAttribute("data-copied", "");
  window.setTimeout(() => {
    btn.textContent = btn.dataset.originalLabel ?? "";
    btn.removeAttribute("data-copied");
  }, 1100);
}

/** Wire a single copy button to copy a value and flash feedback. */
export function bindCopy(btn: HTMLElement, getValue: () => string) {
  btn.addEventListener("click", async () => {
    const ok = await copyText(getValue());
    if (ok) flashCopied(btn);
  });
}
