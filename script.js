const sections = document.querySelectorAll("#main section[id]");
const navLinks = document.querySelectorAll("#header nav a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const current = `#${entry.target.id}`;

      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === current);
      });
    });
  },
  {
    rootMargin: "-30% 0px -55% 0px",
    threshold: 0.1,
  },
);

sections.forEach((section) => {
  observer.observe(section);
});

const toggleCards = document.querySelectorAll("[data-toggle-card]");
const sharedPanel = document.querySelector("#shortudy-detail");

toggleCards.forEach((card) => {
  const button = card.querySelector("[data-toggle-button]");

  if (!button || !sharedPanel) {
    return;
  }

  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    const nextExpanded = !isExpanded;
    button.setAttribute("aria-expanded", String(nextExpanded));
    sharedPanel.hidden = isExpanded;
    card.classList.toggle("is-expanded", nextExpanded);
    button.textContent = nextExpanded ? "숏터디 미리보기 접기" : "숏터디 미리보기 펼치기";

    if (nextExpanded) {
      requestAnimationFrame(() => {
        sharedPanel.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      button.focus();
    }
  });
});
