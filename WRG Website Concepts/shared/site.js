const menuButton = document.querySelector("[data-menu-toggle]");
const primaryNavigation = document.querySelector("[data-primary-navigation]");

function setMenu(open) {
  if (!menuButton || !primaryNavigation) return;
  menuButton.setAttribute("aria-expanded", String(open));
  primaryNavigation.dataset.open = String(open);
  document.body.classList.toggle("menu-open", open);
}

menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  setMenu(open);
});

primaryNavigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 920) setMenu(false);
});
