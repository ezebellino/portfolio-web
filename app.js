const siteData = {
  personal: {
    name: "Ezequiel Bellino",
    role: "Desarrollador Full Stack freelance con mirada creativa, foco en producto y experiencia construyendo software que resuelve operaciones reales.",
    summary:
      "Diseño y desarrollo aplicaciones web con identidad visual, lógica de negocio sólida y una implementación pensada para usarse de verdad. Me interesa crear productos claros, ágiles y memorables para negocios que necesitan una solución concreta.",
    about:
      "Trabajo de punta a punta: idea, interfaz, backend, flujos internos y despliegue. Me gusta meterme en el detalle del negocio para que cada sistema no solo se vea bien, sino que también mejore la operatoria diaria. Mi perfil mezcla desarrollo, criterio visual y una forma de trabajar muy orientada a resultados concretos.",
    metrics: [
      { value: "3 proyectos", label: "Productos reales y casos con foco operativo" },
      { value: "Full Stack", label: "Frontend, backend y automatización" },
      { value: "Freelance", label: "Disponible para proyectos remotos desde Argentina" },
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
      "Traducir procesos de negocio en productos simples de usar y fáciles de mantener.",
      "Combinar backend, frontend y automatización para resolver operaciones completas.",
      "Diseñar interfaces con personalidad sin perder claridad, velocidad ni usabilidad.",
      "Construir soluciones pensadas para el uso real del cliente, no solo para una demo linda.",
    ],
  },
  cta: {
    primary: {
      label: "Ver proyectos",
      href: "#projects",
      variant: "button-primary",
    },
    secondary: {
      label: "Ir a contacto",
      href: "#contact",
      variant: "button-secondary",
    },
  },
  projects: [
    {
      kicker: "SaaS / gestión",
      title: "MiniEspacio Gym",
      description:
        "Sistema de administración para gimnasio con seguimiento de rutinas y pagos, más generación de informes en PDF para enviar por WhatsApp a los clientes. El proyecto combina gestión interna, automatización y una interfaz pensada para el día a día del negocio.",
      stack: ["React", "Python", "FastAPI", "PostgreSQL"],
      links: [
        { label: "Sitio del cliente", href: "https://miniespacio.vercel.app/" },
        { label: "Repositorio", href: "https://github.com/ezebellino/gym-app" },
      ],
    },
    {
      kicker: "Desktop / operación local",
      title: "WapaPizzaParty",
      description:
        "Aplicación local para mostrador, cocina y seguimiento comercial de una pizzería, diseñada para funcionar en una sola PC del local. Hoy está orientada a la operatoria real: toma rápida de pedidos, comanda automática, avisos al cliente, editor interno de pizzas, tesorería con indicadores y arranque local para Windows.",
      stack: ["Python", "Flask", "SQLite", "Bootstrap", "Windows"],
      links: [
        { label: "Repositorio", href: "https://github.com/ezebellino/WapaPizzasParty" },
      ],
    },
    {
      kicker: "Data / visualización",
      title: "Visualizador Porcentual de Telepase",
      description:
        "Aplicación en Streamlit para analizar reportes de eventos Telepase, detectar lecturas correctas de TAG, identificar intervenciones manuales y filtrar la operación por vía, sentido, horario y patente. Una herramienta pensada para convertir datos operativos en decisiones más rápidas.",
      stack: ["Python", "Streamlit", "Pandas", "Data Analysis"],
      links: [
        { label: "Repositorio", href: "https://github.com/ezebellino/visualizador-telepase" },
      ],
    },
  ],
  contacts: [
    {
      label: "LinkedIn",
      title: "Conectemos por LinkedIn",
      description:
        "Mi perfil profesional, experiencia y recorrido como desarrollador freelance y constructor de productos digitales.",
      href: "https://www.linkedin.com/in/ezebellino/",
      action: "Abrir LinkedIn",
    },
    {
      label: "GitHub",
      title: "Ver código y repositorios",
      description:
        "Repositorios, experimentos y proyectos donde se ve cómo resuelvo arquitectura, lógica y producto.",
      href: "https://github.com/ezebellino/",
      action: "Abrir GitHub",
    },
    {
      label: "CV en español",
      title: "Descargar CV ES",
      description:
        "Versión en español para compartir experiencia, tecnologías y recorrido profesional.",
      href: "./assets/cv/EzequielBellino_CV.pdf",
      action: "Descargar CV ES",
      download: true,
    },
    {
      label: "CV in English",
      title: "Download CV EN",
      description:
        "English version ready to send to international clients, teams or remote opportunities.",
      href: "./assets/cv/CV-ENG-Eze.pdf",
      action: "Download CV EN",
      download: true,
    },
  ],
};

const createButton = ({ label, href, variant, download = false, disabled = false }) => {
  const isLink = Boolean(href) && !disabled;
  const tagName = isLink ? "a" : "span";
  const button = document.createElement(tagName);

  button.className = `button ${variant || "button-secondary"}${disabled ? " is-disabled" : ""}`;
  button.textContent = label;

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
  document.getElementById("hero-name").textContent = siteData.personal.name;
  document.getElementById("hero-role").textContent = siteData.personal.role;
  document.getElementById("hero-summary").textContent = siteData.personal.summary;
  document.getElementById("about-summary").textContent = siteData.personal.about;

  const actions = document.getElementById("hero-actions");
  actions.append(
    createButton({
      label: siteData.cta.primary.label,
      href: siteData.cta.primary.href,
      variant: siteData.cta.primary.variant,
    }),
    createButton({
      label: siteData.cta.secondary.label,
      href: siteData.cta.secondary.href,
      variant: siteData.cta.secondary.variant,
    }),
  );

  const metrics = document.getElementById("hero-metrics");
  siteData.personal.metrics.forEach((metric) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <span class="metric-value">${metric.value}</span>
      <span class="metric-label">${metric.label}</span>
    `;
    metrics.appendChild(item);
  });

  const stack = document.getElementById("stack-tags");
  siteData.personal.stack.forEach((tech) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = tech;
    stack.appendChild(tag);
  });

  const strengths = document.getElementById("strengths-list");
  siteData.personal.strengths.forEach((strength) => {
    const item = document.createElement("li");
    item.textContent = strength;
    strengths.appendChild(item);
  });
};

const renderProjects = () => {
  const projectsGrid = document.getElementById("projects-grid");

  siteData.projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const stackItems = project.stack
      .map((item) => `<li>${item}</li>`)
      .join("");

    card.innerHTML = `
      <p class="project-kicker">${project.kicker}</p>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
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
    projectsGrid.appendChild(card);
  });
};

const renderContacts = () => {
  const contactGrid = document.getElementById("contact-grid");

  siteData.contacts.forEach((contact) => {
    const card = document.createElement("article");
    card.className = "contact-card";
    card.innerHTML = `
      <span class="contact-label">${contact.label}</span>
      <h3>${contact.title}</h3>
      <p>${contact.description}</p>
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

renderHero();
renderProjects();
renderContacts();
