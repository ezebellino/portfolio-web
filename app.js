const siteData = {
  personal: {
    name: "Zeqe Bellino",
    role: "Desarrollador Full Stack enfocado en productos web claros, funcionales y con buena experiencia visual.",
    summary:
      "Construyo interfaces modernas y backends sólidos con foco en que cada proyecto sea útil, rápido y agradable de usar. Este portfolio reúne una selección de mis trabajos más importantes y la mejor forma de contactarme.",
    about:
      "Trabajo entre frontend y backend con un enfoque práctico: entender el problema, resolverlo con tecnología adecuada y cuidar que la experiencia final se sienta profesional. Si querés personalizar el contenido, podés editar este archivo y reemplazar los textos y links por los definitivos.",
    metrics: [
      { value: "Full Stack", label: "React, FastAPI, Django, Flask" },
      { value: "UI + UX", label: "Interfaces pensadas para verse bien y rendir" },
      { value: "Remoto", label: "Disponible para colaborar desde Argentina" },
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
    ],
    strengths: [
      "Transformar una idea en una experiencia web clara, usable y lista para mostrar.",
      "Combinar backend y frontend para construir productos más completos y coherentes.",
      "Mantener una estética moderna sin perder foco en rendimiento, accesibilidad y claridad.",
      "Aprender rápido nuevas herramientas y sumar IA cuando aporta valor real al proyecto.",
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
      kicker: "Proyecto principal",
      title: "Tu proyecto destacado 01",
      description:
        "Reemplazá esta tarjeta por tu proyecto más fuerte. Sumá una descripción corta, el problema que resuelve y por qué vale la pena mostrarlo.",
      stack: ["React", "FastAPI", "PostgreSQL"],
      links: [
        { label: "Demo", href: "#" },
        { label: "Repositorio", href: "#" },
      ],
    },
    {
      kicker: "Producto web",
      title: "Tu proyecto destacado 02",
      description:
        "Ideal para mostrar un sistema, dashboard o app con autenticación, paneles, integraciones o automatizaciones.",
      stack: ["JavaScript", "Django", "Bootstrap"],
      links: [
        { label: "Demo", href: "#" },
        { label: "Caso", href: "#" },
      ],
    },
    {
      kicker: "Frontend + experiencia",
      title: "Tu proyecto destacado 03",
      description:
        "Usá este espacio para una landing, e-commerce, portfolio de cliente o cualquier proyecto donde el diseño y la implementación tengan peso.",
      stack: ["HTML", "CSS", "React"],
      links: [
        { label: "Demo", href: "#" },
        { label: "Repositorio", href: "#" },
      ],
    },
  ],
  contacts: [
    {
      label: "LinkedIn",
      title: "Conectemos por LinkedIn",
      description:
        "Reemplazá el link de ejemplo por tu perfil real para mostrar experiencia, recorrido y publicaciones.",
      href: "",
      action: "Agregar LinkedIn",
    },
    {
      label: "GitHub",
      title: "Ver código y repositorios",
      description:
        "Sumá tu usuario de GitHub para que puedan explorar proyectos, commits y tecnologías que manejás.",
      href: "",
      action: "Agregar GitHub",
    },
    {
      label: "CV",
      title: "Descargar CV",
      description:
        "Dejá tu PDF en assets/cv/zeqe-bellino-cv.pdf y cambiá la URL para activar la descarga.",
      href: "",
      action: "Activar descarga",
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
          variant: link.href === "#" ? "button-secondary" : "button-ghost",
          disabled: !link.href || link.href === "#",
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
