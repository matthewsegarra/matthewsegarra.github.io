// EDIT YOUR PORTFOLIO DETAILS HERE. Replace the sample entries with your own.
const PORTFOLIO = {
  profile: {
    name: "Matthew Segarra",
    brand: "matthewsegarra.github.io",
    handle: "matthewsegarra",
    discipline: "Mechanical Engineering",
    role: "M.S. Candidate",
    availability: "Graduating May 2027 · Open to relocation",
    summary: "I build and test mechanical systems, then use the results to improve the design. My work spans CAD, prototyping, manufacturing, and engineering education.",
    terminalTagline: "Design carefully. Build reliably.",
    contactPrompt: "Let's build something that works.",
    contactIntro: "I’m completing my M.S. in Mechanical Engineering at Florida Polytechnic University and graduating in May 2027. I’m open to full-time engineering roles and relocation.",
    pageDescription: "Mechanical engineering portfolio of Matthew Segarra, featuring design projects, manufacturing experience, and engineering leadership.",
    contacts: [
      { label: "Email", value: "matthew_segarra@outlook.com", url: "mailto:matthew_segarra@outlook.com" },
      { label: "Phone", value: "(407) 338-7621", url: "tel:+14073387621" },
      { label: "LinkedIn", value: "linkedin.com/in/matthewsegarra", url: "https://www.linkedin.com/in/matthewsegarra" },
      { label: "GitHub", value: "github.com/matthewsegarra", url: "https://github.com/matthewsegarra" },
    ],
  },
  sections: {
    skills: { title: "Engineering toolkit", subtitle: "Tools and methods I use to design, build, and test engineering systems." },
    experience: { title: "Experience & education", subtitle: "Engineering work, campus leadership, and my education at Florida Polytechnic University." },
    projects: { title: "Projects", subtitle: "Design, testing, manufacturing, and process improvement work." },
  },
  skills: [
    { group: "CAD & Design", type: "Design tools", style: "red", items: ["SOLIDWORKS", "Sheet Metal Design"] },
    { group: "Manufacturing & Quality", type: "Build and process methods", style: "yellow", items: ["Injection Molding", "3D Printing", "Prusa Slicer", "G-Code", "Root Cause Analysis", "DMAIC", "Kaizen", "Value Stream Mapping"] },
    { group: "Programming & Controls", type: "Technical tools", style: "ink", items: ["MATLAB", "C", "Python", "PLC", "Arduino IDE", "Pygame"] },
    { group: "Grid & Business Software", type: "Software", style: "outline", items: ["Maximo", "Pole Foreman", "Design Lite", "SEDS", "Argus GIS", "MS Office", "Excel", "Canva"] },
    { group: "Hardware & Testing", type: "Platforms and components", style: "red", items: ["Arduino Uno R3", "ATmega328P", "Prusa MINI+", "PASCO Capstone", "VEX Robotics", "Load Cell", "sEMG Sensor", "DC Motor", "40 kg·cm Servo"] },
  ],
  experience: [
    {
      role: "M.S. in Mechanical Engineering, Advanced Topics",
      organization: "Florida Polytechnic University · GPA: 4.00/4.00",
      period: "Graduating May 2027",
      description: "I completed my B.S. in Mechanical Engineering in May 2026 and am continuing into graduate study.",
      highlights: ["Relevant coursework: Principles of Electrical Engineering, Computer Manufacturing and Control, and Human Robotics"],
    },
    {
      role: "Junior Battle Bots Robotics Instructor",
      organization: "iD Tech · Tampa, FL",
      period: "June 2026 – July 2026",
      description: "I taught students ages 6–13 to design, build, and code VEX robots for custom competitions.",
      highlights: ["Instructed 40+ students over six weekly sessions, with more than 95% satisfaction", "Taught Python and Pygame, mentoring four students as they developed five original 2D games"],
    },
    {
      role: "Power Grid Operations (PGO) Distribution Intern",
      organization: "Duke Energy · Largo, FL",
      period: "May 2025 – August 2025",
      description: "I supported coastal overhead and underground distribution projects for residential and commercial customers.",
      highlights: ["Designed evolving grid layouts with Design Lite, Argus GIS, Pole Foreman, and SEDS to improve grid efficiency and reliability", "Helped restore Madeira Beach Elementary after a hurricane by removing temporary infrastructure", "Contributed to upgrades for aging infrastructure, including leaning or broken poles and damaged cables, improving service reliability by over 20% for 15+ direct customers"],
    },
    {
      role: "Community Director & Resident Assistant",
      organization: "Florida Polytechnic University Housing · Lakeland, FL",
      period: "August 2024 – Present",
      description: "I support residents and help build a positive campus community.",
      highlights: ["Mentored four Resident Assistants and served as a resource for 110+ residents", "Organized monthly floor events and community programs with a $1,000 budget", "Managed the Housing & Residential Life Instagram, increasing followers by 9% and boosting engagement"],
    },
    {
      role: "Student Education Assistant",
      organization: "Florida Polytechnic University · Lakeland, FL",
      period: "January 2023 – May 2024",
      description: "I supported Physics I and II laboratory sections and helped students work through experiments and course concepts.",
      highlights: ["Assisted five lab sections serving 100+ students, troubleshooting PASCO Capstone devices and explaining complex concepts", "Monitored lab equipment use to support safety and accurate experiments"],
    },
    {
      role: "Purple Fire VEX Robotics Member",
      organization: "Florida Polytechnic University",
      period: "August 2023 – May 2024",
      description: "I contributed to a VEX robot designed to carry and relocate Triballs.",
      highlights: ["Designed robot subassemblies in SOLIDWORKS", "Created a 15-page engineering notebook documenting design choices and development of Big Bot"],
    },
    {
      role: "Overwatch Academy Captain",
      organization: "Florida Polytechnic University Overwatch Esports",
      period: "August 2023 – May 2024",
      description: "I led a five-player team and ran weekly practices to improve coordination and morale.",
    },
  ],
  projects: [
    {
      name: "GYN Colpo-Pneumo Occluder",
      period: "September 2025 – May 2026",
      description: "I manufactured custom injection-molded silicone occluders with a 40% barium sulfate formulation for Lakeland Regional Health.",
      highlights: ["Added radiopacity and improved device durability", "Checked part integrity with SOLIDWORKS pressure simulations, X-rays, and professional feedback"],
      tech: ["Injection Molding", "Material Science", "SOLIDWORKS"],
    },
    {
      name: "MaxPak Corrugated Package Manufacturing",
      period: "March 2026 – May 2026",
      description: "I used Lean Six Sigma methods to identify manufacturing bottlenecks and improve the production flow.",
      highlights: ["Reduced cycle and wait times by 16.5% with a future-state value stream map and right-sizing protocol", "Used production data to establish a baseline of 25,095 DPMO and target seven forms of waste"],
      tech: ["Root Cause Analysis", "DMAIC", "Kaizen", "Value Stream Mapping"],
    },
    {
      name: "Grip Aid Rehabilitation Device",
      period: "November 2025 – December 2025",
      description: "I developed a hand exoskeleton that uses surface electromyography (sEMG) to trigger motorized grip assistance.",
      highlights: ["Used a 40 kg·cm servo motor with a threshold-based trigger", "Rapidly prototyped 3D-printed parts and tested kinematic fit, range of motion, and rehabilitative motion tracking"],
      tech: ["SOLIDWORKS", "sEMG Sensor", "Arduino IDE", "3D Printing"],
    },
    {
      name: "Loader 5 Torsional Tester",
      period: "August 2024 – May 2025",
      description: "I designed and built a functional torsional tester using a mix of 3D-printed and recycled materials for under $100.",
      highlights: ["Combined a Prusa MINI+, DC motor, potentiometer, load cell, and Arduino Uno with available lab equipment", "Tested load and angular displacement across 20+ PLA samples with varying infill", "Documented the work in a 75-page technical report and a presentation with 200+ slides"],
      tech: ["SOLIDWORKS", "Arduino IDE", "Excel", "Prusa MINI+", "3D Printing", "Load Cell", "DC Motor"],
    },
    {
      name: "3D-Printed Model Catapult",
      period: "March 2024 – May 2024",
      description: "I designed and built a working model catapult using SOLIDWORKS, 3D-printed PLA, woodworking, and recycled steel components.",
      highlights: ["Used recycled materials in the design", "Validated the design with launches to expected ranges of roughly 2π and 5e feet"],
      tech: ["SOLIDWORKS", "Dynamics", "Woodworking", "3D Printing"],
    },
    {
      name: "Design of Experiments: Deflection in a 3D-Printed Beam",
      description: "Project details needed. Add the test setup, variables, analysis, and results.",
      tech: ["Design of Experiments", "3D Printing"],
    },
    {
      name: "Human Robotics: Linear Quadratic Gaussian",
      description: "Project details needed. Add the system, control model, implementation, and test results.",
      tech: ["Human Robotics", "Linear Quadratic Gaussian", "Control Systems"],
    },
  ],
};

const TERMINAL_SCRIPT = [
  { cmd: "whoami", out: PORTFOLIO.profile.name.toLowerCase().replaceAll(" ", "-") },
  { cmd: "cat discipline.txt", out: `${PORTFOLIO.profile.discipline} · ${PORTFOLIO.profile.role}` },
  { cmd: "ls engineering/", out: PORTFOLIO.skills.map((group) => group.items[0]).join("  ") },
  { cmd: "./design --for-reliability", out: PORTFOLIO.profile.terminalTagline, accent: true },
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (key === "class") node.className = value;
    else if (key === "text") node.textContent = value;
    else node.setAttribute(key, value);
  }
  for (const child of [].concat(children)) {
    if (child) node.append(child);
  }
  return node;
}

function styleForTech(tech) {
  const match = PORTFOLIO.skills.find((skill) => skill.items.includes(tech));
  return match ? match.style : "outline";
}

function renderPortfolioText() {
  const { profile, sections } = PORTFOLIO;
  document.title = `${profile.name} | ${profile.role}`;
  document.querySelector('meta[name="description"]').content = profile.pageDescription;
  document.querySelector('meta[property="og:title"]').content = document.title;
  document.querySelector('meta[property="og:description"]').content = profile.pageDescription;
  document.querySelector(".brand").setAttribute("aria-label", `${profile.name}, home`);
  document.getElementById("brand-name").textContent = profile.brand;
  document.getElementById("terminal-home").textContent = `~/${profile.handle}`;
  document.getElementById("hero-title").textContent = profile.name;
  document.getElementById("availability").textContent = profile.availability;
  document.getElementById("profile-discipline").textContent = profile.discipline;
  document.getElementById("profile-role").textContent = profile.role;
  document.getElementById("profile-summary").textContent = profile.summary;
  document.getElementById("skills-title").textContent = sections.skills.title;
  document.getElementById("skills-subtitle").textContent = sections.skills.subtitle;
  document.getElementById("experience-title").textContent = sections.experience.title;
  document.getElementById("experience-subtitle").textContent = sections.experience.subtitle;
  document.getElementById("projects-title").textContent = sections.projects.title;
  document.getElementById("projects-subtitle").textContent = sections.projects.subtitle;
  document.getElementById("battle-line").textContent = profile.contactPrompt;
  document.getElementById("contact-intro").textContent = profile.contactIntro;
  document.getElementById("footer-name").textContent = profile.name;

  const contactLinks = document.getElementById("contact-links");
  contactLinks.replaceChildren(...profile.contacts.map((contact) => {
    const external = /^https?:/i.test(contact.url);
    return el("li", {}, [
      el("a", {
        class: "battle-option",
        href: contact.url,
        ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
      }, [
        el("span", { class: "caret", "aria-hidden": "true", text: "▶" }),
        el("span", { class: "option-body" }, [
          el("span", { class: "option-title", text: contact.label }),
          el("span", { class: "option-meta", text: contact.value }),
        ]),
        external ? el("span", { class: "sr-only", text: "(opens in a new tab)" }) : null,
      ]),
    ]);
  }));
}

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  for (const skill of PORTFOLIO.skills) {
    const pills = el(
      "ul",
      { class: "pills", "aria-label": skill.group },
      skill.items.map((item) => el("li", { class: `pill pill--${skill.style}`, text: item }))
    );
    grid.append(
      el("article", { class: "skill-card" }, [
        el("div", { class: "skill-card-head" }, [
          el("h3", { text: skill.group }),
          el("span", { class: "type-label", text: skill.type }),
        ]),
        pills,
      ])
    );
  }
}

function renderExperience() {
  const timeline = document.getElementById("experience-timeline");
  if (!PORTFOLIO.experience.length) {
    timeline.append(el("li", { class: "experience-empty", text: "Add internships, research, teams, or relevant coursework to the EXPERIENCE list near the top of script.js." }));
    return;
  }

  PORTFOLIO.experience.forEach((item) => {
    timeline.append(
      el("li", { class: "experience-entry" }, [
        el("div", { class: "experience-marker", "aria-hidden": "true" }),
        el("article", { class: "experience-content" }, [
          el("div", { class: "experience-heading" }, [
            el("div", {}, [
              el("h3", { text: item.role }),
              el("p", { class: "experience-org", text: item.organization }),
            ]),
            el("span", { class: "experience-period", text: item.period }),
          ]),
          el("p", { class: "experience-desc", text: item.description }),
          item.highlights?.length
            ? el("ul", { class: "experience-highlights" }, item.highlights.map((highlight) => el("li", { text: highlight })))
            : null,
        ])
      ])
    );
  });
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  PORTFOLIO.projects.forEach((project, index) => {
    const number = String(index + 1).padStart(3, "0");
    const card = el("li", { class: "project", "data-tech": project.tech.join("|") }, [
      el("div", { class: "project-top" }, [
        el("span", {}, [el("span", { class: "dex-no", text: `PROJECT / ${number}` })]),
        el("span", { class: "ball", "aria-hidden": "true" }),
      ]),
      el("div", { class: "project-body" }, [
        el("h3", { text: project.name }),
        project.period ? el("p", { class: "project-period", text: project.period }) : null,
        project.image
          ? el("img", {
              class: "project-image",
              src: project.image,
              alt: project.imageAlt || `${project.name} project`,
              loading: "lazy",
              decoding: "async",
            })
          : el("div", { class: "project-image-placeholder", text: "Add a project photo, CAD rendering, or test setup" }),
        el("p", { class: "project-desc", text: project.description }),
        project.highlights?.length
          ? el(
              "ul",
              { class: "project-highlights" },
              project.highlights.map((h) => el("li", { text: h }))
            )
          : null,
        el("div", { class: "project-foot" }, [
          el(
            "ul",
            { class: "pills", "aria-label": "Technologies" },
            project.tech.map((t) => el("li", { class: `pill pill--${styleForTech(t)}`, text: t }))
          ),
          el("div", { class: "project-links" }, [
            project.source
              ? el(
                  "a",
                  { href: project.source, target: "_blank", rel: "noopener noreferrer" },
                  [`Source code`, el("span", { class: "sr-only", text: ` for ${project.name} (opens in a new tab)` })]
                )
              : null,
            project.demo
              ? el(
                  "a",
                  { href: project.demo, target: "_blank", rel: "noopener noreferrer" },
                  [`Live demo`, el("span", { class: "sr-only", text: ` for ${project.name} (opens in a new tab)` })]
                )
              : null,
          ]),
        ]),
      ]),
    ]);
    grid.append(card);
  });
}

function renderFilters() {
  const container = document.getElementById("filters");
  const empty = document.getElementById("projects-empty");
  const cards = [...document.querySelectorAll(".project")];
  const techs = ["All", ...new Set(PORTFOLIO.projects.flatMap((project) => project.tech))];

  const buttons = techs.map((tech) =>
    el("button", {
      class: "filter",
      type: "button",
      "aria-pressed": tech === "All" ? "true" : "false",
      "data-tech": tech,
      text: tech,
    })
  );
  container.append(...buttons);

  container.addEventListener("click", (event) => {
    const button = event.target.closest(".filter");
    if (!button) return;
    const selected = button.dataset.tech;

    for (const b of buttons) b.setAttribute("aria-pressed", String(b === button));

    let visible = 0;
    for (const card of cards) {
      const show = selected === "All" || card.dataset.tech.split("|").includes(selected);
      card.hidden = !show;
      if (show) visible++;
    }
    empty.hidden = visible > 0;
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runTerminal() {
  const term = document.getElementById("terminal");
  if (!term) return;
  term.setAttribute("aria-label", TERMINAL_SCRIPT.map((l) => `${l.cmd}: ${l.out}`).join(". "));

  const cursor = el("span", { class: "cursor", "aria-hidden": "true" });

  const writeLine = (line) => {
    const cmd = el("span", {}, [el("span", { class: "prompt", text: "$ " }), line.cmd]);
    const out = el("span", { class: line.accent ? "accent" : "out", text: line.out });
    term.append(cmd, "\n", out, "\n");
  };

  if (reduceMotion) {
    TERMINAL_SCRIPT.forEach(writeLine);
    term.append(el("span", { class: "prompt", text: "$ " }), cursor);
    return;
  }

  await sleep(700);
  for (const line of TERMINAL_SCRIPT) {
    const cmdSpan = el("span");
    term.append(el("span", { class: "prompt", text: "$ " }), cmdSpan, cursor);
    for (const char of line.cmd) {
      cmdSpan.textContent += char;
      await sleep(38 + Math.random() * 40);
    }
    await sleep(260);
    cursor.remove();
    term.append("\n", el("span", { class: line.accent ? "accent" : "out", text: line.out }), "\n");
    await sleep(420);
  }
  term.append(el("span", { class: "prompt", text: "$ " }), cursor);
}

function setupBattleText() {
  const line = document.getElementById("battle-line");
  if (!line || reduceMotion || !("IntersectionObserver" in window)) return;
  const full = line.textContent;
  line.setAttribute("aria-label", full);
  line.textContent = "";

  const observer = new IntersectionObserver(
    async (entries) => {
      if (!entries[0].isIntersecting) return;
      observer.disconnect();
      for (const char of full) {
        line.textContent += char;
        await sleep(32);
      }
    },
    { threshold: 0.6 }
  );
  observer.observe(line);
}

function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.getElementById("nav-links");

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    links.classList.toggle("is-open", !open);
  });

  links.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      toggle.setAttribute("aria-expanded", "false");
      links.classList.remove("is-open");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && links.classList.contains("is-open")) {
      toggle.setAttribute("aria-expanded", "false");
      links.classList.remove("is-open");
      toggle.focus();
    }
  });

  if (!("IntersectionObserver" in window)) return;
  const navLinks = [...document.querySelectorAll("[data-nav]")];
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        for (const link of navLinks) {
          if (link.getAttribute("href") === `#${entry.target.id}`) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        }
      }
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  navLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));
    if (section) observer.observe(section);
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
renderPortfolioText();
renderSkills();
renderExperience();
renderProjects();
renderFilters();
setupNav();
setupBattleText();
runTerminal();
