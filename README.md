# GITS UI Components

![GITS.ID](https://gits.id/wp-content/uploads/2020/09/Logo-Main.png)

The official Vue 3 Starter for GITS Indonesia projects.

- [Table of Contents](#vue-3-starter)
  - [Tech Stacks](#tech-stacks)
  - [Folder Structure](#folder-structure)
  - [Local Development](#local-development)
  - [Deployment](#deployment)
  - [API](#api)
  - [Design](#design)
  - [License](#license)

## Tech Stacks

- [Vite.js](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Vue.js](https://vuejs.org/) - The Progressive JavaScript Framework.
- [Vue Router](https://next.router.vuejs.org/) - The official router for Vue.js.
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework.
- [TailwindForms](https://github.com/tailwindlabs/tailwindcss-forms) - A plugin that provides a basic reset for form styles that makes form elements easy to override with utilities.
- [HeadlessUI](https://headlessui.dev/) - Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.

## Folder Structure

```
.
├── dist                    # Compiled files
├── public                  # Public assets
├── src                     # Source of application codes
│   ├── api                 # API mapping
│   ├── assets              # Dynamic assets managed by webpack
│   └── components          # Reusable Vue Components
│   └── composables         # Composable Function
│   └── plugins             # Vue plugins
│   └── router              # Routing
│   └── store               # Vuex
│   └── utils               # App utilities
│   └── views               # Vue page components
├── tests                   # Unit tests
├── .env                    # Environment variable
└── README.md
```

## Local Development

- Install dependencies via `npm` by running:
  ```bash
  npm install
  ```
- Create/copy environment file:
  ```bash
  cp .env.example .env
  ```
- Run the development server:
  ```bash
  npm run dev
  ```
- Open `http://localhost:3000` in the browser

Learn more about development with Vite.js [here](https://vitejs.dev/).

## Deployment

When it is time to deploy your app for production, simply run the `npm run build` command. By default, it uses <root>/index.html as the build entry point, and produces an application bundle that is suitable to be served over a static hosting service.

Learn for about building for production [here](https://vitejs.dev/guide/build.html).

## API

Postman URL: http://someurl.com/

Credentials:

- Username: username
- Password: password

## Design

- Figma URL: figma.com
- Adobe Xd: xd.adobe.com

## License

This project is private and only used for GITS Indonesia.
