# Portfolio web de Zeqe Bellino

Este proyecto es una versión estática de tu portfolio para que puedas subirlo fácil a Hostinger.

## Archivos principales

- `index.html`: estructura general del sitio.
- `styles.css`: estilos y responsive.
- `app.js`: datos editables del portfolio y renderizado dinámico.

## Qué editar primero

Abrí `app.js` y reemplazá:

- `siteData.personal`: nombre, rol, resumen y fortalezas.
- `siteData.projects`: tus proyectos reales, con descripción, stack y links.
- `siteData.contacts`: tus links reales de LinkedIn, GitHub y CV.

## Cómo activar la descarga del CV

1. Creá la carpeta `assets/cv`.
2. Subí tu PDF con el nombre `zeqe-bellino-cv.pdf`.
3. En `app.js`, dentro de `siteData.contacts`, en el bloque `CV`, cambiá:

```js
href: ""
```

por:

```js
href: "./assets/cv/zeqe-bellino-cv.pdf"
```

## Cómo publicarlo en Hostinger

1. Comprimí el contenido de esta carpeta o subilo por el File Manager.
2. Asegurate de que `index.html` quede en la raíz del dominio.
3. Si ya hay una versión anterior del sitio, reemplazá sus archivos por estos.

## Recomendación

Si querés, en el próximo paso puedo ayudarte a:

- completar tus proyectos reales dentro de `app.js`
- dejar tus links de LinkedIn y GitHub listos
- preparar una versión más premium con animaciones, secciones extra y copy más personal
