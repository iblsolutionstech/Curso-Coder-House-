# Atelier YaninaCattadori

Sitio web institucional estatico para un atelier de arreglos de ropa y alta costura. El proyecto cumple con la consigna de 5 paginas HTML, estilos realizados con SASS, Bootstrap adaptado a identidad propia, animaciones, SEO basico, accesibilidad y responsive design.

## Estructura

- `index.html`: pagina principal.
- `pages/servicios.html`: servicios de arreglos.
- `pages/alta-costura.html`: propuesta de alta costura.
- `pages/galeria.html`: portfolio de trabajos.
- `pages/contacto.html`: contacto y formulario.
- `assets/scss/`: estructura SASS con variables, mixins, partials, nesting y extend.
- `assets/css/styles.css`: CSS compilado desde SASS.
- `assets/js/main.js`: inicializacion de AOS, estado del menu y anio dinamico.

## Compilar SASS

```bash
npm install
npm run build:sass
```

Tambien se puede usar Sass global:

```bash
sass assets/scss/main.scss assets/css/styles.css --style=compressed
```

## Deploy sugerido

Subir el proyecto a GitHub y conectarlo con Vercel o Netlify. La carpeta raiz a publicar es esta misma carpeta, porque `index.html` esta en la raiz del proyecto.

## Texto breve para el Google Docs

### Codigo

El sitio esta desarrollado con HTML semantico, Bootstrap por CDN y estilos propios compilados desde SASS. La estructura de SASS utiliza partials, variables, mixins, extend, nesting y separacion por base, componentes, layout y paginas.

### Repositorio

Pegar aqui el enlace al repositorio de GitHub despues de subir el proyecto.

### Demo

Pegar aqui el enlace de Vercel o Netlify y agregar capturas en vista desktop, tablet y mobile.

### Reflexion final

La tematica elegida fue un atelier dedicado a arreglos de ropa y alta costura, porque permite combinar un servicio cotidiano con una identidad visual elegante y artesanal. El objetivo fue mostrar procesos, servicios, trabajos destacados y un canal de contacto claro para posibles clientes.

Una dificultad del desarrollo fue mantener Bootstrap sin que el sitio pareciera generico. Para resolverlo, se personalizaron colores, botones, tarjetas, navegacion y secciones mediante SASS, priorizando responsive design, accesibilidad, SEO y una navegacion disponible desde todas las paginas.
