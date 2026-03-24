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
const sharedIframe = sharedPanel?.querySelector("iframe");

const syncIframeHeight = (iframe) => {
  if (!iframe) {
    return;
  }

  try {
    const iframeDocument = iframe.contentDocument || iframe.contentWindow?.document;

    if (!iframeDocument) {
      return;
    }

    const bodyHeight = iframeDocument.body?.scrollHeight ?? 0;
    const documentHeight = iframeDocument.documentElement?.scrollHeight ?? 0;
    const nextHeight = Math.max(bodyHeight, documentHeight, 1000);

    iframe.style.height = `${nextHeight}px`;
  } catch (error) {
    // Keep the fallback min-height when the iframe document is unavailable.
  }
};

if (sharedIframe) {
  sharedIframe.addEventListener("load", () => {
    syncIframeHeight(sharedIframe);
  });
}

toggleCards.forEach((card) => {
  const button = card.querySelector(".card-toggle-button");
  const indicator = card.querySelector(".toggle-indicator");

  if (!button || !sharedPanel || !indicator) {
    return;
  }

  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isExpanded));
    sharedPanel.hidden = isExpanded;
    indicator.textContent = isExpanded ? "열기" : "닫기";

    if (!isExpanded && sharedIframe) {
      requestAnimationFrame(() => {
        syncIframeHeight(sharedIframe);
        sharedPanel.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  });
});
