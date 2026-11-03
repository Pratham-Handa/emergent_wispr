export function scrollToLocation(pathname, hash) {
  if (pathname !== "/" || hash !== "#booking") return false;
  const booking = document.getElementById("booking");
  if (!booking) return false;

  if (window.__lenis) window.__lenis.scrollTo(booking, { offset: -72, duration: 0.65 });
  else booking.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}
