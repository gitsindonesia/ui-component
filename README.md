# GITS UI Component

[![Quality Gate Status](https://sonar.gits.id/api/project_badges/measure?project=ui&metric=alert_status&token=47997a4785ff0c755eff7782b1be0676a7d358d3)](https://sonar.gits.id/dashboard?id=ui)
[![Coverage](https://sonar.gits.id/api/project_badges/measure?project=ui&metric=coverage&token=47997a4785ff0c755eff7782b1be0676a7d358d3)](https://sonar.gits.id/dashboard?id=ui)

![GITS.ID](https://gits.id/wp-content/uploads/2020/09/Logo-Main.png)

The official UI Component for GITS Indonesia.

## Major Dependencies

- [Lerna](https://lerna.js.org/)
- [Vue.js](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Headless UI](https://headlessui.dev/)
- [Heroicons](https://heroicons.com/)
- [Vue Remix Icons](https://www.npmjs.com/package/vue-remix-icons)

## Development

- Install [lerna](https://lerna.js.org/) and [yarn](https://yarnpkg.com/) globally:
  ```bash
  npm i -g lerna yarn
  ```
- Bootstap all packages:
  ```
  lerna bootstrap
  ```
- Run storybook:

  ```bash
  yarn sb
  ```

## Commands

| Command     | Description                   |
| ----------- | ----------------------------- |
| `storybook` | Run storybook                 |
| `sb`        | Alias for `storybook` command |
| `dev`       | Run playground                |
| `build`     | Build playground              |
| `test`      | Run test via `vitest`         |

### Lerna Commands

| Command     | Description            |
| ----------- | ---------------------- |
| `bootstrap` | Bootstrap all packages |
| `publish`   | Publish packages       |

Visit [lerna documentation](https://github.com/lerna/lerna) for all other commands.

## License

MIT
