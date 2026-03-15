const portfolioData = {
  profile: {
    name: "MINJI",
    role: "운동으로 단련된 빌더",
    catchphrase: "기록으로 설득하고, 끝까지 완성한다.",
    heroTitle: "지구력으로 설계하고,\n결과로 증명하는 사람.",
    heroCopy:
      "3대 700, 국토종주 3회, 자전거 대회와 듀애슬론 완주. 긴 호흡으로 꾸준히 밀어붙여 결국 결과를 만드는 타입입니다. 제품과 프로젝트도 같은 방식으로 끝까지 가져갑니다.",
    contactTitle: "함께 오래 가는 프로젝트를 찾고 있습니다.",
    contactCopy:
      "이 초안은 한 장짜리 메인 포트폴리오용으로 설계했습니다. 이름, GitHub, 이메일, 대표 레포만 바꾸면 바로 개인 브랜딩 페이지로 사용할 수 있습니다.",
    githubUrl: "https://github.com/minji0828",
    githubLabel: "github.com/minji0828",
    email: "contact@example.com",
  },
  stats: [
    { value: "700", label: "3대 합계", suffix: "kg" },
    { value: "3", label: "국토종주", suffix: "회" },
    { value: "2", label: "레이스 카테고리", suffix: "종" },
    { value: "100", label: "끝까지 가져가는 집요함", suffix: "%" },
  ],
  proofs: [
    {
      title: "3대 700",
      meta: "Strength",
      description:
        "고강도 루틴을 오래 유지하며 기준치를 끌어올린 기록입니다. 반복과 점진적 향상에 강한 사람이라는 가장 직관적인 증거입니다.",
    },
    {
      title: "국토종주 3회",
      meta: "Endurance",
      description:
        "긴 거리와 긴 시간을 관리하는 능력입니다. 페이스 조절, 변수 대응, 완주의 감각을 실제 경험으로 체득했습니다.",
    },
    {
      title: "자전거 대회 · 듀애슬론 참가",
      meta: "Execution",
      description:
        "준비와 실전을 분리하지 않고 검증하는 타입입니다. 목표를 정하면 훈련하고, 실제 환경에서 끝까지 부딪혀 결과를 확인합니다.",
    },
  ],
  journey: [
    {
      date: "Phase 01",
      title: "3대 700 달성",
      description:
        "짧은 동기보다 긴 루틴이 강하다는 걸 몸으로 증명한 기록입니다. 기준을 세우고 끝까지 밀어붙이는 스타일의 출발점입니다.",
    },
    {
      date: "Phase 02",
      title: "국토종주 3회",
      description:
        "장거리에서 필요한 페이스 관리와 멘탈 유지, 변수 대응을 반복 학습한 경험입니다. 한 번이 아니라 세 번 완주했다는 점이 중요합니다.",
    },
    {
      date: "Phase 03",
      title: "자전거 대회 참가",
      description:
        "훈련을 기록에만 남기지 않고 실전 환경에서 점검해본 경험입니다. 목표를 세우면 준비하고, 실제 필드에서 검증합니다.",
    },
    {
      date: "Phase 04",
      title: "듀애슬론 참가",
      description:
        "종목이 바뀌어도 리듬을 다시 맞춰 끝까지 완주하는 적응력을 보여줍니다. 새로운 스택과 환경에도 빠르게 적응하는 태도와 연결됩니다.",
    },
  ],
  projects: [
    {
      label: "대표 레포 01",
      title: "프로젝트 이름을 넣는 자리",
      description:
        "이 카드에 실제 GitHub 레포 링크와 한 줄 문제 정의, 핵심 성과를 적으면 메인 포트폴리오 섹션으로 바로 쓸 수 있습니다.",
      stack: ["Next.js", "TypeScript", "PostgreSQL"],
      url: "https://github.com/minji0828/minji-pop",
      linkText: "GitHub 열기",
    },
    {
      label: "대표 레포 02",
      title: "성장 서사를 보여줄 프로젝트",
      description:
        "운영 경험, 트래픽 처리, 데이터 모델링, 자동화 등 당신 강점이 가장 잘 드러나는 프로젝트를 배치하는 용도입니다.",
      stack: ["React", "Node.js", "AWS"],
      url: "https://github.com/minji0828/minji-pop",
      linkText: "프로젝트 보기",
    },
    {
      label: "대표 레포 03",
      title: "완성도를 보여줄 프로젝트",
      description:
        "작아도 좋지만 완성도가 높아야 합니다. README, 데모, 구조 설명까지 갖춘 저장소 하나가 전체 인상을 끌어올립니다.",
      stack: ["Spring", "Docker", "CI/CD"],
      url: "https://github.com/minji0828/minji-pop",
      linkText: "상세 확인",
    },
  ],
  mindset: [
    {
      title: "루틴으로 쌓는 기본기",
      description:
        "한 번 몰아서 하는 사람보다 꾸준히 반복하는 사람이 결국 멀리 갑니다. 운동도, 코드도 같은 원리로 접근합니다.",
    },
    {
      title: "중간 포기보다 완주를 우선",
      description:
        "어려운 문제를 만나면 속도를 조절해도 방향은 유지합니다. 끝내서 배우는 편이 중간에 멈추는 것보다 훨씬 강합니다.",
    },
    {
      title: "기록을 남기고 개선",
      description:
        "훈련 로그를 보듯 작업도 기록합니다. 회고 가능한 구조를 만들수록 다음 반복의 품질과 속도가 같이 올라갑니다.",
    },
  ],
};

const textWithBreaks = (value) => value.replaceAll("\n", "<br />");

const brandName = document.querySelector("#brand-name");
const brandRole = document.querySelector("#brand-role");
const sidebarQuote = document.querySelector("#sidebar-quote");
const heroTitle = document.querySelector("#hero-title");
const heroCopy = document.querySelector("#hero-copy");
const contactTitle = document.querySelector("#contact-title");
const contactCopy = document.querySelector("#contact-copy");
const primaryLink = document.querySelector("#primary-link");
const secondaryLink = document.querySelector("#secondary-link");
const contactGithub = document.querySelector("#contact-github");
const contactEmail = document.querySelector("#contact-email");

brandName.textContent = portfolioData.profile.name;
brandRole.textContent = portfolioData.profile.role;
sidebarQuote.textContent = portfolioData.profile.catchphrase;
heroTitle.innerHTML = textWithBreaks(portfolioData.profile.heroTitle);
heroCopy.textContent = portfolioData.profile.heroCopy;
contactTitle.textContent = portfolioData.profile.contactTitle;
contactCopy.textContent = portfolioData.profile.contactCopy;
primaryLink.href = "#projects";
secondaryLink.href = "#contact";
contactGithub.href = portfolioData.profile.githubUrl;
contactGithub.querySelector("strong").textContent = portfolioData.profile.githubLabel;
contactEmail.href = `mailto:${portfolioData.profile.email}`;
contactEmail.querySelector("strong").textContent = portfolioData.profile.email;

const heroStats = document.querySelector("#hero-stats");
const proofCards = document.querySelector("#proof-cards");
const journeyList = document.querySelector("#journey-list");
const projectList = document.querySelector("#project-list");
const mindsetList = document.querySelector("#mindset-list");

heroStats.innerHTML = portfolioData.stats
  .map(
    ({ value, label, suffix }) => `
      <article class="stat-card reveal">
        <strong data-count="${value}">0</strong>
        <span>${label} ${suffix}</span>
      </article>
    `,
  )
  .join("");

proofCards.innerHTML = portfolioData.proofs
  .map(
    ({ title, meta, description }) => `
      <article class="proof-card reveal">
        <p class="proof-card__meta">${meta}</p>
        <strong>${title}</strong>
        <p>${description}</p>
      </article>
    `,
  )
  .join("");

journeyList.innerHTML = portfolioData.journey
  .map(
    ({ date, title, description }) => `
      <article class="journey-card reveal">
        <p class="journey-card__date">${date}</p>
        <strong>${title}</strong>
        <p>${description}</p>
      </article>
    `,
  )
  .join("");

projectList.innerHTML = portfolioData.projects
  .map(
    ({ label, title, description, stack, url, linkText }) => `
      <article class="project-card reveal">
        <p class="project-card__meta">${label}</p>
        <strong>${title}</strong>
        <p>${description}</p>
        <div class="project-card__stack">
          ${stack.map((item) => `<span>${item}</span>`).join("")}
        </div>
        <a class="project-card__link" href="${url}" target="_blank" rel="noreferrer">
          ${linkText}
        </a>
      </article>
    `,
  )
  .join("");

mindsetList.innerHTML = portfolioData.mindset
  .map(
    ({ title, description }) => `
      <article class="mindset-card reveal">
        <strong>${title}</strong>
        <p>${description}</p>
      </article>
    `,
  )
  .join("");

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav__link");
const reveals = document.querySelectorAll(".reveal");
const counters = document.querySelectorAll("[data-count]");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const activeId = entry.target.id;
      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${activeId}`;
        link.classList.toggle("is-active", isActive);
      });
    });
  },
  {
    rootMargin: "-35% 0px -45% 0px",
    threshold: 0.2,
  },
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.16,
  },
);

reveals.forEach((element, index) => {
  element.style.transitionDelay = `${index * 60}ms`;
  revealObserver.observe(element);
});

const countObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const target = entry.target;
      const goal = Number(target.dataset.count);
      const duration = 1000;
      const start = performance.now();

      const frame = (time) => {
        const progress = Math.min((time - start) / duration, 1);
        const eased = 1 - (1 - progress) ** 3;
        target.textContent = Math.round(goal * eased).toString();

        if (progress < 1) {
          requestAnimationFrame(frame);
          return;
        }

        observer.unobserve(target);
      };

      requestAnimationFrame(frame);
    });
  },
  { threshold: 0.5 },
);

counters.forEach((counter) => {
  countObserver.observe(counter);
});
