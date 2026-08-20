const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const contactDialog = document.querySelector("[data-contact-dialog]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeColor = document.querySelector("[data-theme-color]");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

const getSavedTheme = () => {
  try {
    return localStorage.getItem("today-sports-theme");
  } catch {
    return null;
  }
};

const applyTheme = (theme, animate = false) => {
  const isDark = theme === "dark";

  if (animate && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.classList.add("theme-transition");
    window.setTimeout(() => document.documentElement.classList.remove("theme-transition"), 460);
  }

  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeToggle?.setAttribute("aria-pressed", String(isDark));
  themeToggle?.setAttribute("aria-label", isDark ? "Açık temaya geç" : "Koyu temaya geç");
  themeColor?.setAttribute("content", isDark ? "#151118" : "#f7f1e6");
};

applyTheme(document.documentElement.dataset.theme || (systemTheme.matches ? "dark" : "light"));

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme, true);
  try {
    localStorage.setItem("today-sports-theme", nextTheme);
  } catch {
    // Tema yine bu oturumda çalışır; yalnızca kalıcı tercih saklanamaz.
  }
});

const syncWithSystemTheme = (event) => {
  if (!getSavedTheme()) applyTheme(event.matches ? "dark" : "light", true);
};

if (systemTheme.addEventListener) {
  systemTheme.addEventListener("change", syncWithSystemTheme);
} else {
  systemTheme.addListener?.(syncWithSystemTheme);
}

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
};

const closeMenu = () => {
  if (!menuButton || !mobileMenu) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Menüyü aç");
  mobileMenu.hidden = true;
  document.body.classList.remove("menu-open");
};

const toggleMenu = () => {
  if (!menuButton || !mobileMenu) return;
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(willOpen));
  menuButton.setAttribute("aria-label", willOpen ? "Menüyü kapat" : "Menüyü aç");
  mobileMenu.hidden = !willOpen;
  document.body.classList.toggle("menu-open", willOpen);
};

const openContact = () => {
  closeMenu();
  if (contactDialog && !contactDialog.open) contactDialog.showModal();
};

menuButton?.addEventListener("click", toggleMenu);
mobileMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

document.querySelectorAll("[data-open-contact]").forEach((button) => {
  button.addEventListener("click", openContact);
});

document.querySelector("[data-close-contact]")?.addEventListener("click", () => {
  contactDialog?.close();
});

contactDialog?.addEventListener("click", (event) => {
  if (event.target === contactDialog) contactDialog.close();
});

document.querySelectorAll(".faq-list details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    document.querySelectorAll(".faq-list details[open]").forEach((other) => {
      if (other !== item) other.removeAttribute("open");
    });
  });
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -32px" },
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 1040) closeMenu();
});
updateHeader();
