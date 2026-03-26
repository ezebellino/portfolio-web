const siteData = {
  currentLanguage: localStorage.getItem("zeqe-language") || "es",
  personal: {
    name: "Ezequiel Bellino",
    brand: "Zeqe.DEV",
    role: {
      es: "Desarrollador Full Stack freelance con mirada creativa, foco en producto y experiencia construyendo software que resuelve operaciones reales.",
      en: "Freelance Full Stack Developer with a creative mindset, product focus and hands-on experience building software for real operational problems.",
    },
    summary: {
      es: "Diseño y desarrollo aplicaciones web con identidad visual, lógica de negocio sólida y una implementación pensada para usarse de verdad. Me interesa crear productos claros, ágiles y memorables para negocios que necesitan una solución concreta.",
      en: "I design and build web applications with a strong visual identity, solid business logic and implementation meant for real-world use. I care about crafting products that feel clear, fast and memorable for businesses that need practical software.",
    },
    about: {
      es: "Trabajo de punta a punta: idea, interfaz, backend, flujos internos y despliegue. Me gusta meterme en el detalle del negocio para que cada sistema no solo se vea bien, sino que también mejore la operatoria diaria. Mi perfil mezcla desarrollo, criterio visual y una forma de trabajar muy orientada a resultados concretos.",
      en: "I work end to end: idea, interface, backend, internal workflows and deployment. I like getting deep into the business details so every system not only looks good, but also improves daily operations. My profile blends engineering, visual judgment and a results-driven way of working.",
    },
    metrics: [
      {
        value: { es: "3 proyectos", en: "3 projects" },
        label: {
          es: "Productos reales y casos con foco operativo",
          en: "Real products and case studies with an operations focus",
        },
      },
      {
        value: { es: "Full Stack", en: "Full Stack" },
        label: {
          es: "Frontend, backend y automatización",
          en: "Frontend, backend and automation",
        },
      },
      {
        value: { es: "Freelance", en: "Freelance" },
        label: {
          es: "Disponible para proyectos remotos desde Argentina",
          en: "Available for remote projects from Argentina",
        },
      },
    ],
    stack: [
      "React",
      "JavaScript",
      "TypeScript",
      "Python",
      "FastAPI",
      "Django",
      "Flask",
      "PostgreSQL",
      "Tailwind",
      "Bootstrap",
      "Streamlit",
      "SQLite",
      "Windows",
    ],
    strengths: [
      {
        es: "Traducir procesos de negocio en productos simples de usar y fáciles de mantener.",
        en: "Turn business processes into products that are simple to use and easy to maintain.",
      },
      {
        es: "Combinar backend, frontend y automatización para resolver operaciones completas.",
        en: "Combine backend, frontend and automation to solve full operational workflows.",
      },
      {
        es: "Diseñar interfaces con personalidad sin perder claridad, velocidad ni usabilidad.",
        en: "Design interfaces with personality without sacrificing clarity, speed or usability.",
      },
      {
        es: "Construir soluciones pensadas para uso real, no solo para una demo linda.",
        en: "Build solutions meant for real usage, not just a pretty demo.",
      },
    ],
  },
  labels: {
    navProjects: { es: "Proyectos", en: "Projects" },
    navAbout: { es: "Perfil", en: "Profile" },
    navStack: { es: "Stack", en: "Stack" },
    navContact: { es: "Contacto", en: "Contact" },
    heroEyebrow: { es: "Portfolio 2026", en: "Portfolio 2026" },
    heroPrimary: { es: "Ver proyectos", en: "View projects" },
    heroSecondary: { es: "Ir a contacto", en: "Go to contact" },
    stackPanel: { es: "Stack principal", en: "Core stack" },
    brandLabel: { es: "Alias / marca", en: "Alias / brand" },
    panelTitle: {
      es: "Lo que vas a encontrar acá",
      en: "What you will find here",
    },
    panelText: {
      es: "Proyectos reales, enfoque de producto, desarrollo full stack y una forma directa de contactarme para colaborar.",
      en: "Real projects, product thinking, full stack development and a direct way to contact me for collaboration.",
    },
    projectsEyebrow: { es: "Proyectos destacados", en: "Featured projects" },
    projectsTitle: {
      es: "Trabajo seleccionado",
      en: "Selected work",
    },
    projectsText: {
      es: "Una selección de proyectos para mostrar cómo convierto ideas en productos funcionales y visualmente cuidados.",
      en: "A selection of projects that show how I turn ideas into polished, functional products.",
    },
    spotlightLabel: { es: "Modo exploración", en: "Exploration mode" },
    spotlightTitle: {
      es: "Pasá el mouse por un proyecto y cambia el pulso del sitio",
      en: "Hover a project and the whole site shifts with it",
    },
    spotlightBody: {
      es: "Quise que esta sección se sintiera más viva que una grilla estática. Cada proyecto activa su propia energía visual y actualiza este panel.",
      en: "I wanted this section to feel more alive than a static grid. Each project brings its own visual energy and updates this panel.",
    },
    spotlightImpactTitle: { es: "Lo más interesante", en: "Most interesting part" },
    spotlightHint: {
      es: "Explorá las cards para ver otra versión del portfolio en acción.",
      en: "Explore the cards to see another version of the portfolio in motion.",
    },
    aboutEyebrow: { es: "Perfil", en: "Profile" },
    aboutTitle: { es: "Cómo trabajo", en: "How I work" },
    aboutCardTitle: {
      es: "Desarrollo con foco en producto",
      en: "Product-driven development",
    },
    strengthsTitle: { es: "Fortalezas", en: "Strengths" },
    stackEyebrow: { es: "Stack", en: "Stack" },
    stackTitle: {
      es: "Tecnologías con las que construyo",
      en: "Technologies I build with",
    },
    stackText: {
      es: "Herramientas que uso para crear productos web, automatizar flujos y resolver operaciones reales con una base técnica sólida.",
      en: "Tools I use to build web products, automate workflows and solve real operational problems with a solid technical base.",
    },
    contactEyebrow: { es: "Contacto", en: "Contact" },
    contactTitle: { es: "Links importantes", en: "Key links" },
    contactText: {
      es: "Si querés ver más trabajo, descargar mi CV o escribirme, acá está todo centralizado.",
      en: "If you want to see more work, download my resume or reach out, everything is centralized here.",
    },
    assistantLabel: { es: "Console", en: "Console" },
    assistantTitle: { es: "Zeqe.DEV Console", en: "Zeqe.DEV Console" },
  },
  stackGroups: [
    {
      title: { es: "Backend & lógica", en: "Backend & logic" },
      description: {
        es: "Herramientas con las que construyo APIs, automatizaciones, procesos internos y lógica de negocio.",
        en: "Tools I use to build APIs, automations, internal workflows and business logic.",
      },
      items: [
        { name: "Python", iconClass: "devicon-python-plain" },
        { name: "FastAPI", iconClass: "devicon-fastapi-plain" },
        { name: "Flask", iconClass: "devicon-flask-original" },
        { name: "Django", iconClass: "devicon-django-plain" },
        { name: "SQLAlchemy", icon: "Sa" },
      ],
    },
    {
      title: { es: "Frontend & experiencia", en: "Frontend & experience" },
      description: {
        es: "Tecnologías para interfaces modernas, responsive y orientadas a producto.",
        en: "Technologies for modern, responsive, product-oriented interfaces.",
      },
      items: [
        { name: "JavaScript", iconClass: "devicon-javascript-plain" },
        { name: "TypeScript", iconClass: "devicon-typescript-plain" },
        { name: "React", iconClass: "devicon-react-original" },
        { name: "HTML", iconClass: "devicon-html5-plain" },
        { name: "CSS", iconClass: "devicon-css3-plain" },
        { name: "Tailwind", iconClass: "devicon-tailwindcss-original" },
        { name: "Bootstrap", iconClass: "devicon-bootstrap-plain" },
      ],
    },
    {
      title: { es: "Datos & desktop", en: "Data & desktop" },
      description: {
        es: "Stack que uso para visualización, análisis de datos y aplicaciones locales para operación diaria.",
        en: "Stack I use for visualization, data analysis and local desktop applications for daily operations.",
      },
      items: [
        { name: "Streamlit", icon: "St" },
        { name: "Pandas", icon: "Pd" },
        { name: "SQLite", iconClass: "devicon-sqlite-plain" },
        { name: "PostgreSQL", iconClass: "devicon-postgresql-plain" },
        { name: "Windows", iconClass: "devicon-windows11-original" },
      ],
    },
    {
      title: { es: "Infra & flujo de trabajo", en: "Infra & workflow" },
      description: {
        es: "Herramientas para versionado, despliegue y trabajo técnico más ordenado.",
        en: "Tools for version control, deployment and a more structured technical workflow.",
      },
      items: [
        { name: "Git", iconClass: "devicon-git-plain" },
        { name: "GitHub", iconClass: "devicon-github-original" },
        { name: "Vercel", iconClass: "devicon-vercel-original" },
        { name: "APIs", icon: "Api" },
        { name: "PDF Automation", icon: "PDF" },
      ],
    },
  ],
  projects: [
    {
      accent: "#53d8fb",
      kicker: { es: "SaaS / gestión", en: "SaaS / management" },
      title: "MiniEspacio Gym",
      description: {
        es: "Sistema de administración para gimnasio con seguimiento de rutinas y pagos, más generación de informes en PDF para enviar por WhatsApp a los clientes. El proyecto combina gestión interna, automatización y una interfaz pensada para el día a día del negocio.",
        en: "Gym management system with workout and payment tracking, plus PDF reports sent through WhatsApp to clients. The project combines internal administration, automation and an interface designed for real daily operations.",
      },
      impact: {
        es: "Gestión, automatización y comunicación con clientes en un solo flujo.",
        en: "Management, automation and client communication in a single workflow.",
      },
      media: "./assets/GymAPPVideo.webm",
      stack: ["React", "Python", "FastAPI", "PostgreSQL"],
      links: [
        {
          label: { es: "Sitio del cliente", en: "Client website" },
          href: "https://miniespacio.vercel.app/",
        },
        {
          label: { es: "Repositorio", en: "Repository" },
          href: "https://github.com/ezebellino/gym-app",
        },
      ],
    },
    {
      accent: "#7df2c6",
      kicker: { es: "Desktop / operación local", en: "Desktop / local operations" },
      title: "WapaPizzaParty",
      description: {
        es: "Aplicación local para mostrador, cocina y seguimiento comercial de una pizzería, diseñada para funcionar en una sola PC del local. Hoy está orientada a la operatoria real: toma rápida de pedidos, comanda automática, avisos al cliente, editor interno de pizzas, tesorería con indicadores y arranque local para Windows. Fue diseñada con FastAPI y una persistencia liviana basada en JSON, priorizando velocidad de uso y simplicidad para el negocio.",
        en: "Local application for counter sales, kitchen flow and commercial tracking in a pizza shop, designed to run on a single business PC. It is focused on real operation: fast order intake, automatic kitchen tickets, client notifications, internal pizza editor, treasury indicators and local Windows startup.",
      },
      impact: {
        es: "Software pensado para una operatoria concreta, no para una demo abstracta.",
        en: "Software built for a specific real-world operation, not an abstract showcase.",
      },
      media: "./assets/WappaPizzaPartyVideo.webm",
      stack: ["Python", "FastAPI", "JSON", "Bootstrap", "Windows"],
      links: [
        {
          label: { es: "Repositorio", en: "Repository" },
          href: "https://github.com/ezebellino/WapaPizzasParty",
        },
      ],
    },
    {
      accent: "#8a6cff",
      kicker: { es: "Data / visualización", en: "Data / visualization" },
      title: "Visualizador Porcentual de Telepase",
      description: {
        es: "Aplicación en Streamlit que diseñé para mi trabajo actual en mantenimiento eléctrico dentro del entorno de peajes. Sirve para analizar reportes de eventos Telepase, detectar lecturas correctas de TAG, identificar intervenciones manuales y filtrar la operación por vía, sentido, horario y patente. Nació como una herramienta interna para saber de forma rápida y eficaz qué lectura están teniendo las antenas.",
        en: "Streamlit application I designed for my current job in electrical maintenance within the toll station environment. It analyzes Telepase event reports, detects valid TAG reads, identifies manual interventions and filters operations by lane, direction, time and license plate. It started as an internal tool to quickly and reliably understand how the antennas are reading traffic.",
      },
      impact: {
        es: "Conecta mi experiencia técnica en campo con software útil para mantenimiento, diagnóstico y lectura operativa de antenas.",
        en: "It connects my field technical experience with useful software for maintenance, diagnostics and operational antenna reading.",
      },
      media: "./assets/VisualizadorTelepaseVideo.webm",
      stack: ["Python", "Streamlit", "Pandas", "Data Analysis"],
      links: [
        {
          label: { es: "Repositorio", en: "Repository" },
          href: "https://github.com/ezebellino/visualizador-telepase",
        },
      ],
    },
  ],
  contacts: [
    {
      label: { es: "Email", en: "Email" },
      title: {
        es: "Escribime por mail",
        en: "Email me directly",
      },
      description: {
        es: "Si querés hablar de una oportunidad, una idea o una colaboración, podés escribirme directo.",
        en: "If you want to talk about an opportunity, an idea or a collaboration, you can email me directly.",
      },
      href: "mailto:ezequielbellino@gmail.com",
      action: { es: "Enviar email", en: "Send email" },
    },
    {
      label: { es: "LinkedIn", en: "LinkedIn" },
      title: {
        es: "Conectemos por LinkedIn",
        en: "Let us connect on LinkedIn",
      },
      description: {
        es: "Mi perfil profesional, experiencia y recorrido como desarrollador freelance y constructor de productos digitales.",
        en: "My professional profile, experience and journey as a freelance developer and digital product builder.",
      },
      href: "https://www.linkedin.com/in/ezebellino/",
      action: { es: "Abrir LinkedIn", en: "Open LinkedIn" },
    },
    {
      label: { es: "GitHub", en: "GitHub" },
      title: {
        es: "Ver código y repositorios",
        en: "See code and repositories",
      },
      description: {
        es: "Repositorios, experimentos y proyectos donde se ve cómo resuelvo arquitectura, lógica y producto.",
        en: "Repositories, experiments and projects that show how I approach architecture, logic and product thinking.",
      },
      href: "https://github.com/ezebellino/",
      action: { es: "Abrir GitHub", en: "Open GitHub" },
    },
    {
      label: { es: "CV en español", en: "Resume in Spanish" },
      title: { es: "Descargar CV ES", en: "Download CV ES" },
      description: {
        es: "Versión en español para compartir experiencia, tecnologías y recorrido profesional.",
        en: "Spanish version for sharing experience, technologies and professional background.",
      },
      href: "./assets/cv/EzequielBellino_CV.pdf",
      action: { es: "Descargar CV ES", en: "Download CV ES" },
      download: true,
    },
    {
      label: { es: "CV in English", en: "CV in English" },
      title: { es: "Download CV EN", en: "Download CV EN" },
      description: {
        es: "Versión en inglés lista para clientes internacionales, equipos remotos u oportunidades globales.",
        en: "English version ready for international clients, remote teams or global opportunities.",
      },
      href: "./assets/cv/CV-ENG-Eze.pdf",
      action: { es: "Download CV EN", en: "Download CV EN" },
      download: true,
    },
  ],
  assistant: {
    intro: {
      title: { es: "Boot sequence", en: "Boot sequence" },
      text: {
        es: "Console inicializada. Usá estos accesos para explorar rápido mi perfil, mis proyectos y mi forma de trabajar.",
        en: "Console initialized. Use these shortcuts to quickly explore my profile, projects and way of working.",
      },
    },
    options: [
      {
        label: { es: "about", en: "about" },
        reply: {
          es: "Diseño y desarrollo productos web full stack, sistemas internos y herramientas para negocios que necesitan resolver procesos reales con software claro y funcional.",
          en: "I design and build full stack web products, internal systems and tools for businesses that need clear, functional software for real processes.",
        },
        section: "#about",
      },
      {
        label: { es: "stack", en: "stack" },
        reply: {
          es: "Trabajo principalmente con Python, FastAPI, Django, React, JavaScript, PostgreSQL, Streamlit y herramientas para automatización y operación local.",
          en: "I mainly work with Python, FastAPI, Flask, Django, React, JavaScript, PostgreSQL, Streamlit and tools for automation and local operations.",
        },
        section: "#stack",
      },
      {
        label: { es: "projects", en: "projects" },
        reply: {
          es: "Me muevo muy bien en apps de gestión, dashboards, sistemas internos, herramientas desktop y productos con foco en experiencia de uso y flujo operativo. Y si querés, podemos sumar más proyectos porque estos tres son solo una parte del recorrido.",
          en: "I work especially well on management apps, dashboards, internal systems, desktop tools and products focused on user experience and operational flow. And if needed, we can add more projects because these three are only part of the journey.",
        },
        section: "#projects",
      },
      {
        label: { es: "highlight", en: "highlight" },
        reply: {
          es: "Activo el modo spotlight sobre MiniEspacio Gym para mostrar una de las soluciones más completas del portfolio.",
          en: "Triggering spotlight mode on MiniEspacio Gym to show one of the most complete solutions in the portfolio.",
        },
        section: "#projects",
        projectIndex: 0,
      },
      {
        label: { es: "contact", en: "contact" },
        reply: {
          es: "Podés ir directo a Email, LinkedIn, GitHub o descargar mis CV en español e inglés desde la sección de contacto.",
          en: "You can jump directly to LinkedIn, GitHub or download my resumes in Spanish and English from the contact section.",
        },
        section: "#contact",
      },
    ],
  },
};

const t = (value) => {
  if (value && typeof value === "object" && "es" in value && "en" in value) {
    return value[siteData.currentLanguage];
  }
  return value;
};

const qs = (selector) => document.querySelector(selector);

const applyLanguageLabels = () => {
  qs("[data-label='nav-projects']").textContent = t(siteData.labels.navProjects);
  qs("[data-label='nav-about']").textContent = t(siteData.labels.navAbout);
  qs("[data-label='nav-stack']").textContent = t(siteData.labels.navStack);
  qs("[data-label='nav-contact']").textContent = t(siteData.labels.navContact);
  qs("[data-label='hero-eyebrow']").textContent = t(siteData.labels.heroEyebrow);
  qs("[data-label='stack-panel']").textContent = t(siteData.labels.stackPanel);
  qs("[data-label='brand-label']").textContent = t(siteData.labels.brandLabel);
  qs("[data-label='panel-title']").textContent = t(siteData.labels.panelTitle);
  qs("[data-label='panel-text']").textContent = t(siteData.labels.panelText);
  qs("[data-label='projects-eyebrow']").textContent = t(siteData.labels.projectsEyebrow);
  qs("[data-label='projects-title']").textContent = t(siteData.labels.projectsTitle);
  qs("[data-label='projects-text']").textContent = t(siteData.labels.projectsText);
  qs("[data-label='about-eyebrow']").textContent = t(siteData.labels.aboutEyebrow);
  qs("[data-label='about-title']").textContent = t(siteData.labels.aboutTitle);
  qs("[data-label='about-card-title']").textContent = t(siteData.labels.aboutCardTitle);
  qs("[data-label='strengths-title']").textContent = t(siteData.labels.strengthsTitle);
  qs("[data-label='stack-eyebrow']").textContent = t(siteData.labels.stackEyebrow);
  qs("[data-label='stack-title']").textContent = t(siteData.labels.stackTitle);
  qs("[data-label='stack-text']").textContent = t(siteData.labels.stackText);
  qs("[data-label='contact-eyebrow']").textContent = t(siteData.labels.contactEyebrow);
  qs("[data-label='contact-title']").textContent = t(siteData.labels.contactTitle);
  qs("[data-label='contact-text']").textContent = t(siteData.labels.contactText);
  qs("[data-label='assistant-bubble']").textContent = t(siteData.labels.assistantLabel);
  qs("[data-label='assistant-title']").textContent = t(siteData.labels.assistantTitle);
  qs("[data-label='spotlight-label']").textContent = t(siteData.labels.spotlightLabel);
  qs("[data-label='spotlight-title']").textContent = t(siteData.labels.spotlightTitle);
  qs("[data-label='spotlight-body']").textContent = t(siteData.labels.spotlightBody);
  qs("[data-label='spotlight-impact-title']").textContent = t(siteData.labels.spotlightImpactTitle);
  qs("[data-label='spotlight-hint']").textContent = t(siteData.labels.spotlightHint);
};

const createButton = ({ label, href, variant, download = false, disabled = false }) => {
  const isLink = Boolean(href) && !disabled;
  const tagName = isLink ? "a" : "span";
  const button = document.createElement(tagName);

  button.className = `button ${variant || "button-secondary"}${disabled ? " is-disabled" : ""}`;
  button.textContent = t(label);

  if (isLink) {
    button.href = href;
    if (download) {
      button.setAttribute("download", "");
    }
    if (/^https?:\/\//.test(href)) {
      button.target = "_blank";
      button.rel = "noreferrer";
    }
  }

  return button;
};

const renderHero = () => {
  qs("#hero-name").textContent = siteData.personal.name;
  qs("#hero-role").textContent = t(siteData.personal.role);
  qs("#hero-summary").textContent = t(siteData.personal.summary);
  qs("#about-summary").textContent = t(siteData.personal.about);
  qs("#brand-alias").textContent = siteData.personal.brand;

  const actions = qs("#hero-actions");
  actions.innerHTML = "";
  actions.append(
    createButton({
      label: siteData.labels.heroPrimary,
      href: "#projects",
      variant: "button-primary",
    }),
    createButton({
      label: siteData.labels.heroSecondary,
      href: "#contact",
      variant: "button-secondary",
    }),
  );

  const metrics = qs("#hero-metrics");
  metrics.innerHTML = "";
  siteData.personal.metrics.forEach((metric) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <span class="metric-value">${t(metric.value)}</span>
      <span class="metric-label">${t(metric.label)}</span>
    `;
    metrics.appendChild(item);
  });

  const stack = qs("#stack-tags");
  stack.innerHTML = "";
  siteData.personal.stack.forEach((tech) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = tech;
    stack.appendChild(tag);
  });

  const strengths = qs("#strengths-list");
  strengths.innerHTML = "";
  siteData.personal.strengths.forEach((strength) => {
    const item = document.createElement("li");
    item.textContent = t(strength);
    strengths.appendChild(item);
  });
};

const updateSpotlight = (project = siteData.projects[0]) => {
  document.documentElement.style.setProperty("--project-accent", project.accent);
  qs("#spotlight-kicker").textContent = t(project.kicker);
  qs("#spotlight-project-title").textContent = project.title;
  qs("#spotlight-project-body").textContent = t(project.description);
  qs("#spotlight-project-impact").textContent = t(project.impact);
  const video = qs("#spotlight-video");
  if (video && video.getAttribute("src") !== project.media) {
    video.src = project.media;
    video.load();
    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {});
    }
  }

  const links = qs("#spotlight-links");
  links.innerHTML = "";
  project.links.forEach((link) => {
    links.appendChild(
      createButton({
        label: link.label,
        href: link.href,
        variant: "button-ghost",
      }),
    );
  });
};

const renderProjects = () => {
  const projectsGrid = qs("#projects-grid");
  projectsGrid.innerHTML = "";

  siteData.projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.style.setProperty("--card-accent", project.accent);

    const stackItems = project.stack.map((item) => `<li>${item}</li>`).join("");

    card.innerHTML = `
      <p class="project-kicker">${t(project.kicker)}</p>
      <h3>${project.title}</h3>
      <p>${t(project.description)}</p>
      <ul class="project-stack">${stackItems}</ul>
    `;

    const links = document.createElement("div");
    links.className = "project-links";

    project.links.forEach((link) => {
      links.appendChild(
        createButton({
          label: link.label,
          href: link.href,
          variant: "button-ghost",
          disabled: !link.href,
        }),
      );
    });

    card.appendChild(links);

    card.addEventListener("mouseenter", () => updateSpotlight(project));
    card.addEventListener("focusin", () => updateSpotlight(project));

    projectsGrid.appendChild(card);
  });

  updateSpotlight(siteData.projects[0]);
};

const renderStackGroups = () => {
  const stackGroups = qs("#stack-groups");
  stackGroups.innerHTML = "";

  siteData.stackGroups.forEach((group) => {
    const card = document.createElement("article");
    card.className = "stack-group";

    const items = group.items
      .map(
        (item) => `
          <div class="stack-item">
            <span class="stack-icon" aria-hidden="true">${
              item.iconClass ? `<i class="${item.iconClass}"></i>` : item.icon
            }</span>
            <span class="stack-name">${item.name}</span>
          </div>
        `,
      )
      .join("");

    card.innerHTML = `
      <h3>${t(group.title)}</h3>
      <p>${t(group.description)}</p>
      <div class="stack-items">${items}</div>
    `;

    stackGroups.appendChild(card);
  });
};

const renderContacts = () => {
  const contactGrid = qs("#contact-grid");
  contactGrid.innerHTML = "";

  siteData.contacts.forEach((contact) => {
    const card = document.createElement("article");
    card.className = "contact-card";
    card.innerHTML = `
      <span class="contact-label">${t(contact.label)}</span>
      <h3>${t(contact.title)}</h3>
      <p>${t(contact.description)}</p>
    `;

    const actions = document.createElement("div");
    actions.className = "contact-actions";
    actions.appendChild(
      createButton({
        label: contact.action,
        href: contact.href,
        variant: contact.href ? "button-primary" : "button-secondary",
        disabled: !contact.href,
        download: contact.download,
      }),
    );

    card.appendChild(actions);
    contactGrid.appendChild(card);
  });
};

const renderAssistant = () => {
  const messages = qs("#assistant-messages");
  const choices = qs("#assistant-choices");
  messages.innerHTML = "";
  choices.innerHTML = "";

  const intro = document.createElement("div");
  intro.className = "assistant-message";
  intro.innerHTML = `
    <strong>${t(siteData.assistant.intro.title)}</strong>
    <span>${t(siteData.assistant.intro.text)}</span>
  `;
  messages.appendChild(intro);

  siteData.assistant.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "assistant-choice";
    button.textContent = t(option.label);

    button.addEventListener("click", () => {
      const reply = document.createElement("div");
      reply.className = "assistant-message";
      reply.innerHTML = `<strong>${t(option.label)}</strong><span></span>`;
      messages.appendChild(reply);

      const span = reply.querySelector("span");
      const text = t(option.reply);
      let index = 0;

      const type = () => {
        span.textContent = text.slice(0, index);
        index += 1;
        if (index <= text.length) {
          window.setTimeout(type, 12);
        }
      };

      type();
      messages.scrollTop = messages.scrollHeight;

      if (typeof option.projectIndex === "number") {
        updateSpotlight(siteData.projects[option.projectIndex]);
      }

      if (option.section) {
        const section = qs(option.section);
        if (section) {
          window.setTimeout(() => {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 120);
        }
      }
    });

    choices.appendChild(button);
  });
};

const playLanguageTransition = (nextLanguage) => {
  const overlay = qs("#language-transition");
  const label = qs("#language-transition-label");
  const value = nextLanguage === "es" ? "ESPANOL" : "ENGLISH";
  label.textContent = value;
  overlay.classList.remove("is-animating");
  void overlay.offsetWidth;
  overlay.classList.add("is-animating");
};

const updateLanguageToggle = () => {
  document.documentElement.lang = siteData.currentLanguage;
  document.documentElement.dataset.language = siteData.currentLanguage;

  document.querySelectorAll(".lang-toggle button").forEach((button) => {
    const isActive = button.dataset.lang === siteData.currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const renderAll = () => {
  applyLanguageLabels();
  updateLanguageToggle();
  renderHero();
  renderProjects();
  renderStackGroups();
  renderContacts();
  renderAssistant();
};

const setupLanguageToggle = () => {
  document.querySelectorAll(".lang-toggle button").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.lang;
      if (nextLanguage === siteData.currentLanguage) {
        return;
      }

      playLanguageTransition(nextLanguage);
      siteData.currentLanguage = nextLanguage;
      localStorage.setItem("zeqe-language", nextLanguage);

      window.setTimeout(() => {
        renderAll();
      }, 260);
    });
  });
};

const setupAssistantToggle = () => {
  const bubble = qs("#assistant-bubble");
  const panel = qs("#assistant-panel");
  const close = qs("#assistant-close");

  bubble.addEventListener("click", () => {
    panel.classList.toggle("is-hidden");
  });

  close.addEventListener("click", () => {
    panel.classList.add("is-hidden");
  });
};

const setupCursorGlow = () => {
  const glow = qs("#cursor-glow");

  window.addEventListener("pointermove", (event) => {
    glow.style.transform = `translate(${event.clientX - 140}px, ${event.clientY - 140}px)`;
  });
};

setupLanguageToggle();
setupAssistantToggle();
setupCursorGlow();
renderAll();
