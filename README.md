# GITS UI Component

![GITS.ID](https://gits.id/wp-content/uploads/2020/09/Logo-Main.png)

The official UI Component for GITS Indonesia projects.

- [GITS UI Component](#gits-ui-component)
  - [Major Dependencies](#major-dependencies)
  - [Local Development](#local-development)
  - [Deployment](#deployment)
  - [License](#license)

## Major Dependencies

- [Vue.js](https://vuejs.org/) - The Progressive JavaScript Framework.
- [Vue Router](https://next.router.vuejs.org/) - The official router for Vue.js.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
- [Headless UI](https://headlessui.dev/) - Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.

## Local Development

- Install dependencies via `pnpm` by running:
  ```bash
  pnpm i
  ```
- Run the development server:
  ```bash
  pnpm sb
  # OR
  pnpm storybook
  ```
- Open `http://localhost:6006` in the browser

Learn more about development with Vite.js [here](https://vitejs.dev/).

## Deployment

When it is time to deploy your app for production, simply run the `pnpm build` command. By default, it uses <root>/index.html as the build entry point, and produces an application bundle that is suitable to be served over a static hosting service.

Learn for about building for production [here](https://vitejs.dev/guide/build.html).

## License

MIT
