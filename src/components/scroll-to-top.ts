export function scrollToPageTop(focusContent = false) {
  if (focusContent) document.getElementById("main-content")?.focus({ preventScroll: true });
  // Keep Next.js history state and the page's query filters intact.
  if (window.location.hash) window.history.replaceState(window.history.state, "", window.location.pathname + window.location.search);
  window.scrollTo({ top: 0, left: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
}
