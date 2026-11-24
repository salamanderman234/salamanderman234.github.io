/**
 * ============================================================================
 * I GEDE TRESNA AGUNG SAPUTRA — SWISS PERSONAL PORTFOLIO ENGINE
 * Edit PORTFOLIO_DATA below to update any details for GitHub Pages.
 * ============================================================================
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "I Gede Tresna Agung Saputra",
    shortName: "Tresna Saputra",
    initials: "TS",
    role: "Programmer & Full-Stack Web Developer",
    roleShort: "FULLSTACK DEVELOPER",
    location: "Bali, Indonesia",
    experienceYears: "2+ YEARS",
    availability: "OPEN TO WORK / FREELANCE",
    email: "tresnasaputra9@gmail.com",
    resumeUrl: "https://www.linkedin.com/in/i-gede-tresna-agung-saputra-19b753197/",
    avatarUrl: "", // Optional: Put "./photo.jpg" here to display your photo, or leave "" for Swiss TS monogram
    greetingHtml: `<span class="accent-text">HELLO,</span> <span class="muted">I’M I GEDE TRESNA AGUNG SAPUTRA —</span>`,
    headlineHtml: `BUILDING MODERN<br />WEB EXPERIENCES<br /><span class="accent-text">WITH PRECISION.</span>`,
    summary:
      "Programmer and Software Developer based in Bali, Indonesia. Experienced in building modular WordPress Gutenberg block plugins, modern React frontend architectures, and full-stack Laravel & cloud-backed web applications.",
  },

  about: {
    paragraphs: [
      "I am a Software Developer and Information Technology graduate from Universitas Udayana (Bali, Indonesia) with a strong passion for clean architecture, modular component design, and high-performance web development.",
      "With hands-on experience building and maintaining complex WordPress Gutenberg block plugins and modern web applications, I combine React, PHP, SCSS, and custom style-generation architectures to deliver fast, scalable web experiences.",
      "Alongside WordPress and frontend engineering, I have extensive experience developing full-stack web systems with Laravel, Golang, RESTful APIs, and relational databases.",
    ],
  },

  skills: [
    {
      category: "01 / FRONTEND",
      level: "VISUAL & UI",
      items: [
        "HTML",
        "CSS",
        "SCSS",
        "JavaScript",
        "React",
        "Next.js",
        "Vue.js",
        "WordPress",
      ],
    },
    {
      category: "02 / BACKEND",
      level: "SERVER & LOGIC",
      items: [
        "PHP",
        "Laravel",
        "Golang",
        "Node.js",
        "Python",
      ],
    },
    {
      category: "03 / TOOLS & OTHERS",
      level: "INFRASTRUCTURE",
      items: [
        "Git",
        "Docker",
        "Linux",
        "MySQL",
        "PostgreSQL",
      ],
    },
    {
      category: "04 / LANGUAGES",
      level: "COMMUNICATION",
      items: [
        "Indonesia (Native)",
        `English (32 <img src="./assets/duolingo.svg" alt="Duolingo" class="duo-icon" />)`,
        `Japanese (12 <img src="./assets/duolingo.svg" alt="Duolingo" class="duo-icon" />)`,
      ],
    },
  ],

  projects: [
    {
      id: "01",
      code: "PROJECT / 01",
      title: "Gutenverse",
      category: "wordpress",
      categoryLabel: "React, WordPress, PHP, SCSS, Customer Support",
      year: "2025 - 2026",
      role: "Programmer",
      summary:
        "Modular Gutenberg block suite and page-building framework for WordPress featuring custom editor panels, dynamic PHP/JS style generators, and lightweight frontend scripts.",
      highlights: [
        "Developed reusable Gutenberg blocks with isolated editor.scss and frontend style.scss compilation",
        "Engineered dynamic block-style.js and PHP class-style-generator.php pipelines",
      ],
      stack: ["React", "WordPress", "PHP", "SCSS", "Customer Support"],
      liveUrl: "https://gutenverse.com/",
      repoUrl: "https://wordpress.org/plugins/gutenverse/",
      thumbnailUrl: "./assets/gutenverse-landing.png",
      posterPattern: "concentric",
    },
    {
      id: "02",
      code: "PROJECT / 02",
      title: "JNews 20",
      category: "wordpress",
      categoryLabel: "WordPress, PHP, HTML, CSS, JavaScript, Customer Support",
      year: "2026",
      role: "Programmer",
      summary:
        "Next-generation evolution of the JNews WordPress newspaper, magazine, and publishing theme engineered for high-traffic editorial sites, flexible layout customization, and optimized performance.",
      highlights: [
        "Developed and maintained theme features, custom modules, and plugin integrations for JNews 20",
        "Resolved complex technical issues, theme compatibility, and customer support inquiries",
      ],
      stack: ["WordPress", "PHP", "HTML", "CSS", "JavaScript", "Customer Support"],
      liveUrl: "https://jnews.io/",
      repoUrl: "https://jnews.io/",
      thumbnailUrl: "./assets/jnews-landing.png",
      posterPattern: "grid-matrix",
    },
    {
      id: "03",
      code: "PROJECT / 03",
      title: "Kana Bali Group",
      category: "fullstack",
      categoryLabel: "Laravel, PHP, MySQL, JavaScript",
      year: "2024",
      role: "Full Stack Developer",
      summary:
        "Official company profile and business portal for Kana Bali Group, featuring multi-brand product showcases and a centralized management system.",
      highlights: [
        "Architected and designed database schemas, data relationships, and system logic flows using Laravel",
        "Engineered the administrative control panel for seamless multi-brand catalog and content management",
      ],
      stack: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML / CSS"],
      liveUrl: "https://kanabaligroup.com/",
      repoUrl: "https://kanabaligroup.com/",
      thumbnailUrl: "./assets/kanabaligroup-landing.png",
      posterPattern: "bars",
    },
    {
      id: "04",
      code: "PROJECT / 04",
      title: "D'Camel Fast Ferry",
      category: "backend",
      categoryLabel: "PHP, MySQL, HTML, CSS, JavaScript",
      year: "2024",
      role: "Backend Developer",
      summary:
        "Comprehensive booking and fleet management system for D'Camel Fast Ferry connecting Sanur to Nusa Lembongan, Lombok, and the Gili Islands.",
      highlights: [
        "Managed database architecture, ran database migrations, and ensured schema integrity",
        "Engineered new admin features and maintained internal operational systems",
      ],
      stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      liveUrl: "https://dcamelfastferry.com/",
      repoUrl: "https://dcamelfastferry.com/",
      thumbnailUrl: "./assets/dcamelfastferry-landing.png",
      posterPattern: "fibonacci",
    },
  ],

  experience: [
    {
      category: "EXPERIENCE",
      period: "2025 — 2026",
      role: "WordPress Developer",
      organization: "Jegstudio",
      summary:
        "Developing and maintaining WordPress Gutenberg plugins, custom blocks, and frontend/backend architecture within the Gutenverse ecosystem. Collaborating across React editor controls, PHP style generation, and modular asset pipelines.",
      deliverables: [
        "WordPress",
        "PHP",
        "React",
        "SCSS",
        "Customer Support",
      ],
    },
    {
      category: "EXPERIENCE",
      period: "2024 — 2025",
      role: "Full Stack Developer",
      organization: "PT. Siki Revolusi Inovasi",
      summary:
        "Developed and maintained the company's internal systems, building full-stack web features, backend services, and operational dashboards.",
      deliverables: [
        "Golang",
        "Laravel",
        "HTML",
        "CSS",
        "JavaScript",
        "PostgreSQL",
        "Security",
      ],
    },
    {
      category: "EDUCATION",
      period: "2020 — 2024",
      role: "Bachelor of Information Technology (S.Kom.)",
      organization: "Universitas Udayana (Faculty of Engineering)",
      summary:
        "Studied Information Technology (Program Studi S1 Teknologi Informasi, Fakultas Teknik) at Udayana University with focus on Software Engineering, Web Development, and Information Systems.",
      deliverables: ["S1 Teknologi Informasi", "Faculty of Engineering", "Software Engineering"],
    },
    {
      category: "TRAINING",
      period: "2022",
      role: "Back End Engineering Ruangguru CAMP Batch 3",
      organization: "Ruangguru",
      summary:
        "Completed intensive backend engineering bootcamp focused on building scalable server-side applications and RESTful APIs mainly using Golang.",
      deliverables: ["Back-End Engineering", "Golang", "RESTful APIs"],
    },
    {
      category: "TRAINING",
      period: "2022",
      role: "Baparekraf Digital Talent Tahun 2022 Tahap 2 - IT Support",
      organization: "Dicoding Indonesia",
      summary:
        "Completed digital talent training program focused on IT support fundamentals, troubleshooting, and customer support best practices.",
      deliverables: ["IT Support", "Customer Support", "Troubleshooting"],
    },
  ],

  socials: [
    {
      label: "04.1 / PROFESSIONAL",
      name: "LinkedIn ↗",
      url: "https://www.linkedin.com/in/i-gede-tresna-agung-saputra-19b753197/",
    },
    {
      label: "04.2 / SOCIAL",
      name: "Instagram ↗",
      url: "https://www.instagram.com/tresnasaputra9/",
    },
    {
      label: "04.3 / CODE",
      name: "GitHub ↗",
      url: "https://github.com/salamanderman234",
    },
    {
      label: "04.4 / DIRECT MAIL",
      name: "Email Me ↗",
      url: "mailto:tresnasaputra9@gmail.com",
    },
  ],
};

/**
 * Generates Swiss Geometric Portrait / Monogram if no photo URL is set
 */
function generatePortraitSVG(initials) {
  return `
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${initials} Personal Monogram">
      <rect width="400" height="400" fill="none"/>
      <g stroke="currentColor" stroke-opacity="0.14" stroke-width="1">
        <line x1="100" y1="0" x2="100" y2="400"/>
        <line x1="200" y1="0" x2="200" y2="400"/>
        <line x1="300" y1="0" x2="300" y2="400"/>
        <line x1="0" y1="100" x2="400" y2="100"/>
        <line x1="0" y1="200" x2="400" y2="200"/>
        <line x1="0" y1="300" x2="400" y2="300"/>
      </g>
      <circle cx="200" cy="200" r="128" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <circle cx="288" cy="112" r="22" fill="#ff2b00"/>
      <rect x="64" y="64" width="14" height="14" fill="currentColor"/>
      <text x="200" y="226" text-anchor="middle" font-family="Inter, sans-serif" font-weight="800" font-size="78" letter-spacing="-3" fill="currentColor">${initials}</text>
    </svg>
  `;
}

/**
 * Generates Swiss International Style geometric SVG artwork for projects
 */
function generateSwissPosterSVG(pattern, index) {
  const patterns = {
    concentric: `
      <svg viewBox="0 0 600 338" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <line x1="0" y1="169" x2="600" y2="169" stroke="currentColor" stroke-opacity="0.16" stroke-width="1"/>
        <line x1="300" y1="0" x2="300" y2="338" stroke="currentColor" stroke-opacity="0.16" stroke-width="1"/>
        <circle cx="300" cy="169" r="124" fill="none" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="300" cy="169" r="84" fill="none" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="300" cy="169" r="44" fill="none" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="300" cy="169" r="18" fill="#ff2b00"/>
        <text x="36" y="42" font-family="JetBrains Mono, monospace" font-size="11" fill="currentColor">0${index} / ARCHIVE</text>
      </svg>
    `,
    bars: `
      <svg viewBox="0 0 600 338" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="108" y="68" width="32" height="202" fill="currentColor"/>
        <rect x="172" y="118" width="32" height="152" fill="currentColor"/>
        <rect x="236" y="48" width="32" height="222" fill="#ff2b00"/>
        <rect x="300" y="92" width="32" height="178" fill="currentColor"/>
        <rect x="364" y="142" width="32" height="128" fill="currentColor"/>
        <rect x="428" y="68" width="56" height="202" fill="currentColor"/>
      </svg>
    `,
    "grid-matrix": `
      <svg viewBox="0 0 600 338" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <g transform="translate(135, 42)">
          <rect x="0" y="0" width="72" height="72" fill="currentColor"/>
          <rect x="86" y="0" width="72" height="72" fill="none" stroke="currentColor" stroke-width="1.5"/>
          <rect x="172" y="0" width="72" height="72" fill="#ff2b00"/>
          <rect x="258" y="0" width="72" height="72" fill="currentColor"/>
          <rect x="0" y="86" width="72" height="72" fill="none" stroke="currentColor" stroke-width="1.5"/>
          <rect x="86" y="86" width="72" height="72" fill="currentColor"/>
          <rect x="172" y="86" width="72" height="72" fill="currentColor"/>
          <rect x="258" y="86" width="72" height="72" fill="none" stroke="currentColor" stroke-width="1.5"/>
          <rect x="0" y="172" width="72" height="72" fill="currentColor"/>
          <rect x="86" y="172" width="72" height="72" fill="#ff2b00"/>
          <rect x="172" y="172" width="72" height="72" fill="none" stroke="currentColor" stroke-width="1.5"/>
          <rect x="258" y="172" width="72" height="72" fill="currentColor"/>
        </g>
      </svg>
    `,
    fibonacci: `
      <svg viewBox="0 0 600 338" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="115" y="38" width="262" height="262" fill="none" stroke="currentColor" stroke-width="1.5"/>
        <rect x="377" y="38" width="108" height="108" fill="#ff2b00"/>
        <rect x="377" y="146" width="108" height="154" fill="none" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="246" cy="169" r="84" fill="currentColor"/>
      </svg>
    `,
  };

  return patterns[pattern] || patterns.concentric;
}

/**
 * Populate Personal Profile, Hero, About & Skills
 */
function renderPersonalIdentity() {
  const { profile, about, skills, socials } = PORTFOLIO_DATA;

  document.title = `${profile.name} — ${profile.role}`;
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  setText("navName", (profile.shortName || profile.name).toUpperCase());
  setText("navLocation", profile.location.toUpperCase());
  setText("heroAvailability", profile.availability);
  setText("heroRoleShort", profile.roleShort);
  setText("heroExpYears", profile.experienceYears);
  const greetingEl = document.getElementById("heroGreeting");
  if (greetingEl) greetingEl.innerHTML = profile.greetingHtml;
  setText("heroSummary", profile.summary);
  setText("footerCopy", `© ${new Date().getFullYear()} ${profile.name.toUpperCase()} — PERSONAL PORTFOLIO`);

  const headlineEl = document.getElementById("heroHeadline");
  if (headlineEl) headlineEl.innerHTML = profile.headlineHtml;

  const resumeBtn = document.getElementById("resumeBtn");
  if (resumeBtn) resumeBtn.href = profile.resumeUrl;

  const emailLink = document.getElementById("emailLink");
  if (emailLink) {
    emailLink.textContent = profile.email;
    emailLink.href = `mailto:${profile.email}`;
  }

  // Portrait or Monogram
  const portraitFrame = document.getElementById("portraitFrame");
  if (portraitFrame) {
    if (profile.avatarUrl && profile.avatarUrl.trim() !== "") {
      portraitFrame.innerHTML = `<img src="${profile.avatarUrl}" alt="${profile.name} portrait" />`;
    } else {
      portraitFrame.innerHTML = generatePortraitSVG(profile.initials);
    }
  }

  // About Biography Paragraphs
  const bioContainer = document.getElementById("aboutBioContainer");
  if (bioContainer) {
    bioContainer.innerHTML = about.paragraphs
      .map((p) => `<p class="body-md">${p}</p>`)
      .join("");
  }

  // Technical Toolkit Matrix
  const skillsContainer = document.getElementById("skillsContainer");
  if (skillsContainer) {
    skillsContainer.innerHTML = skills
      .map(
        (group) => `
        <div class="skill-group">
          <div class="skill-group__header">
            <span class="mono-label">${group.category}</span>
            <span class="mono-label accent-text">${group.level}</span>
          </div>
          <div class="tag-list">
            ${group.items.map((item) => `<span class="tag-pill">${item}</span>`).join("")}
          </div>
        </div>
      `
      )
      .join("");
  }

  // Social Channels
  const socialsContainer = document.getElementById("socialsContainer");
  if (socialsContainer) {
    socialsContainer.innerHTML = socials
      .map(
        (s) => `
        <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="channel-cell">
          <span class="mono-label muted">${s.label}</span>
          <span class="channel-name">${s.name}</span>
        </a>
      `
      )
      .join("");
  }
}

/**
 * Render Featured Personal Projects Grid
 */
function renderProjects(filter = "all") {
  const container = document.getElementById("projectsContainer");
  if (!container) return;

  const filtered =
    filter === "all"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === filter);

  container.innerHTML = filtered
    .map(
      (project, idx) => `
      <article class="project-card" data-project-id="${project.id}">
        <div class="project-card__header">
          <span class="mono-label accent-text">${project.code}</span>
          <span class="mono-label muted">${project.year}</span>
        </div>
        <div class="project-card__visual" data-open-modal="${project.id}">
          ${
            project.thumbnailUrl
              ? `<img src="${project.thumbnailUrl}" alt="${project.title} thumbnail" loading="lazy" />`
              : generateSwissPosterSVG(project.posterPattern, idx + 1)
          }
        </div>
        <div class="project-card__body" data-open-modal="${project.id}">
          <div class="project-card__title-row">
            <h3 class="h3-title">${project.title}</h3>
            <span class="mono-label muted">${project.role}</span>
          </div>
          <p class="body-md muted">${project.summary}</p>
        </div>
        <div class="project-card__footer">
          <div class="tag-list">
            ${project.stack.map((tech) => `<span class="tag-pill">${tech}</span>`).join("")}
          </div>
          <div class="project-card__links">
            <button type="button" class="card-link" data-open-modal="${project.id}">DETAILS</button>
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="card-link">LINK ↗</a>
          </div>
        </div>
      </article>
    `
    )
    .join("");

  container.querySelectorAll("[data-open-modal]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      openProjectModal(trigger.getAttribute("data-open-modal"));
    });
  });
}

/**
 * Render Career, Education & Training Ledger
 */
function renderLedger() {
  const container = document.getElementById("ledgerContainer");
  if (!container) return;

  const headerHtml = `
    <div class="ledger-row ledger-row--head" aria-hidden="true">
      <div class="ledger-cell ledger-cell--year"><span class="mono-label muted">CATEGORY</span></div>
      <div class="ledger-cell ledger-cell--role"><span class="mono-label muted">ROLE / DEGREE</span></div>
      <div class="ledger-cell ledger-cell--org"><span class="mono-label muted">INSTITUTION</span></div>
      <div class="ledger-cell ledger-cell--loc"><span class="mono-label muted">PERIOD</span></div>
      <div class="ledger-cell ledger-cell--action"><span class="mono-label muted">INFO</span></div>
    </div>
  `;

  const rowsHtml = PORTFOLIO_DATA.experience
    .map(
      (item, idx) => `
      <div class="ledger-row ${idx === 0 ? "is-open" : ""}" tabindex="0" role="button" aria-expanded="${idx === 0 ? "true" : "false"}">
        <div class="ledger-cell ledger-cell--year">
          <span class="mono-label accent-text">${item.category}</span>
        </div>
        <div class="ledger-cell ledger-cell--role">
          <span>${item.role}</span>
        </div>
        <div class="ledger-cell ledger-cell--org">
          <span class="body-md muted">${item.organization}</span>
        </div>
        <div class="ledger-cell ledger-cell--loc">
          <span class="mono-label muted">${item.period}</span>
        </div>
        <div class="ledger-cell ledger-cell--action">
          <span class="ledger-toggle-icon">${idx === 0 ? "−" : "+"}</span>
        </div>
        <div class="ledger-detail">
          <div class="ledger-detail__inner">
            <div class="ledger-detail__summary">
              <p class="mono-label accent-text" style="margin-bottom: 6px;">OVERVIEW</p>
              <p class="body-md">${item.summary}</p>
            </div>
            <div class="ledger-detail__deliverables">
              <p class="mono-label muted" style="margin-bottom: 4px;">KEY FOCUS &amp; TECH</p>
              <div class="tag-list">
                ${item.deliverables.map((d) => `<span class="tag-pill">${d}</span>`).join("")}
              </div>
            </div>
          </div>
        </div>
      </div>
    `
    )
    .join("");

  container.innerHTML = headerHtml + rowsHtml;

  container.querySelectorAll(".ledger-row:not(.ledger-row--head)").forEach((row) => {
    const toggleRow = () => {
      const isOpen = row.classList.toggle("is-open");
      row.setAttribute("aria-expanded", String(isOpen));
      const icon = row.querySelector(".ledger-toggle-icon");
      if (icon) icon.textContent = isOpen ? "−" : "+";
    };

    row.addEventListener("click", toggleRow);
    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleRow();
      }
    });
  });
}

/**
 * Open Project Case Study Modal
 */
function openProjectModal(projectId) {
  const project = PORTFOLIO_DATA.projects.find((p) => p.id === projectId);
  const modal = document.getElementById("projectModal");
  if (!project || !modal) return;

  document.getElementById("modalCode").textContent = project.code;
  document.getElementById("modalYear").textContent = project.year;
  document.getElementById("modalRole").textContent = project.role;
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalDescription").textContent = project.summary;
  document.getElementById("modalVisual").innerHTML = project.thumbnailUrl
    ? `<img src="${project.thumbnailUrl}" alt="${project.title} thumbnail" />`
    : generateSwissPosterSVG(project.posterPattern, Number(project.id));

  document.getElementById("modalHighlights").innerHTML = project.highlights
    .map((h) => `<div>• ${h}</div>`)
    .join("");

  document.getElementById("modalStack").innerHTML = `
    <div class="tag-list">
      ${project.stack.map((s) => `<span class="tag-pill">${s}</span>`).join("")}
    </div>
  `;

  const liveLink = document.getElementById("modalLiveUrl");
  if (liveLink) liveLink.href = project.liveUrl;

  if (typeof modal.showModal === "function") {
    modal.showModal();
  }
}

/**
 * Live Local Clock (WITA / UTC+8)
 */
function startSwissClock() {
  const clockEl = document.getElementById("liveClock");
  if (!clockEl) return;

  const update = () => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString("en-GB", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    clockEl.textContent = `${timeStr} WITA`;
  };

  update();
  setInterval(update, 1000);
}

/**
 * Initialize Interactive Controls & Mailto Composer
 */
function initInteractions() {
  // Project Filter Buttons
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
      renderProjects(btn.getAttribute("data-filter"));
    });
  });

  // Theme Toggle (Light Paper vs Dark Carbon)
  const themeToggle = document.getElementById("themeToggle");
  const themeState = document.getElementById("themeState");
  const themeIcon = document.getElementById("themeIcon");

  const sunSvg = `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`;
  const moonSvg = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;

  const toggleTheme = () => {
    const html = document.documentElement;
    const current = html.getAttribute("data-theme") || "light";
    const next = current === "light" ? "dark" : "light";
    html.setAttribute("data-theme", next);
    if (themeState) themeState.textContent = next === "light" ? "DARK" : "LIGHT";
    if (themeIcon) themeIcon.innerHTML = next === "light" ? moonSvg : sunSvg;
  };

  if (themeToggle) themeToggle.addEventListener("click", toggleTheme);

  // Keyboard shortcut: 'T' for Theme
  window.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea")) return;
    if (e.key.toLowerCase() === "t") toggleTheme();
  });

  // Modal Close
  const modal = document.getElementById("projectModal");
  const closeModalBtn = document.getElementById("closeModalBtn");
  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener("click", () => modal.close());
    modal.addEventListener("click", (e) => {
      const rect = modal.getBoundingClientRect();
      const clickedOutside =
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom;
      if (clickedOutside) modal.close();
    });
  }

  // Copy Email Button
  const copyBtn = document.getElementById("copyEmailBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
        const original = copyBtn.textContent;
        copyBtn.textContent = "COPIED ✓";
        setTimeout(() => {
          copyBtn.textContent = original;
        }, 1800);
      } catch {
        window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}`;
      }
    });
  }

  // Static Contact Form (Opens pre-filled email client for GitHub Pages)
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("senderName").value.trim();
      const subject = document.getElementById("senderSubject").value.trim();
      const message = document.getElementById("senderMessage").value.trim();

      const mailtoSubject = encodeURIComponent(`${subject} — from ${name}`);
      const mailtoBody = encodeURIComponent(
        `Hi ${PORTFOLIO_DATA.profile.shortName || PORTFOLIO_DATA.profile.name},\n\n${message}\n\nBest regards,\n${name}`
      );
      window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderPersonalIdentity();
  renderProjects("all");
  renderLedger();
  startSwissClock();
  initInteractions();
});
