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
      otherButton.textContent = otherTargetId === "shortudy-detail" ? "숏터디 미리보기 펼치기" : otherTargetId === "gaja-detail" ? "GAJA 미리보기 펼치기" : "AI-STUDY 미리보기 펼치기";
      otherCard.classList.remove("is-expanded");
      otherPanel.hidden = true;
    });

    button.setAttribute("aria-expanded", String(nextExpanded));
    panel.hidden = isExpanded;
    card.classList.toggle("is-expanded", nextExpanded);
    button.textContent = nextExpanded
      ? targetId === "shortudy-detail"
        ? "숏터디 미리보기 접기"
        : targetId === "gaja-detail"
          ? "GAJA 미리보기 접기"
          : "AI-STUDY 미리보기 접기"
      : targetId === "shortudy-detail"
        ? "숏터디 미리보기 펼치기"
        : targetId === "gaja-detail"
          ? "GAJA 미리보기 펼치기"
          : "AI-STUDY 미리보기 펼치기";

    if (nextExpanded) {
      requestAnimationFrame(() => {
        panel.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      button.focus();
    }
  });
});
