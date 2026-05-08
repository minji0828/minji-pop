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

function getCollapsedLabel(targetId) {
  return "포트폴리오 보기";
}

function getExpandedLabel(targetId) {
  return "포트폴리오 접기";
}

toggleCards.forEach((card) => {
  const button = card.querySelector("[data-toggle-button]");
  const targetId = button?.getAttribute("aria-controls");
  const panel = targetId ? document.getElementById(targetId) : null;

  if (!button || !panel) {
    return;
  }

  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    const nextExpanded = !isExpanded;

    toggleCards.forEach((otherCard) => {
      const otherButton = otherCard.querySelector("[data-toggle-button]");
      const otherTargetId = otherButton?.getAttribute("aria-controls");
      const otherPanel = otherTargetId ? document.getElementById(otherTargetId) : null;

      if (!otherButton || !otherPanel || otherButton === button) {
        return;
      }

      otherButton.setAttribute("aria-expanded", "false");
      otherButton.textContent = getCollapsedLabel(otherTargetId);
      otherCard.classList.remove("is-expanded");
      otherPanel.hidden = true;
    });

    button.setAttribute("aria-expanded", String(nextExpanded));
    panel.hidden = isExpanded;
    card.classList.toggle("is-expanded", nextExpanded);
    button.textContent = nextExpanded ? getExpandedLabel(targetId) : getCollapsedLabel(targetId);

    if (nextExpanded) {
      requestAnimationFrame(() => {
        panel.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      button.focus();
    }
  });
});
