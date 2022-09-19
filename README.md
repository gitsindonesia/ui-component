# GITS UI Component

[![Quality Gate Status](https://sonar.gits.id/api/project_badges/measure?project=ui&metric=alert_status&token=47997a4785ff0c755eff7782b1be0676a7d358d3)](https://sonar.gits.id/dashboard?id=ui)
[![Coverage](https://sonar.gits.id/api/project_badges/measure?project=ui&metric=coverage&token=47997a4785ff0c755eff7782b1be0676a7d358d3)](https://sonar.gits.id/dashboard?id=ui)
[![npm version](https://badge.fury.io/js/@gits-id%2Fui.svg)](https://badge.fury.io/js/@gits-id%2Fui)

![GITS.ID](https://gits.id/wp-content/uploads/2020/09/Logo-Main.png)

The official UI Component for GITS Indonesia.

## Major Dependencies

- [Vue.js](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Iconify Vue](https://icones.js.org/)

## Development

- Install [lerna](https://lerna.js.org/) and [yarn](https://yarnpkg.com/) globally:
  ```bash
  npm i -g lerna yarn
  ```
- Bootstap all packages:
  ```
  lerna bootstrap
  ```
- Build all packages:
  ```
  lerna run build
  ```
- Run storybook:

  ```bash
  yarn dev
  ```

## Commands

| Command                      | Description           |
| ---------------------------- | --------------------- |
| `storybook` or `sb` or `dev` | Run storybook         |
| `build`                      | Build storybook       |
| `test`                       | Run test via `vitest` |

### Lerna Commands

| Command     | Description            |
| ----------- | ---------------------- |
| `bootstrap` | Bootstrap all packages |
| `publish`   | Publish packages       |

Visit [lerna documentation](https://github.com/lerna/lerna) for all other commands.

## License

MIT
