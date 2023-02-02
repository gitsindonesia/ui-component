# nuxt-admin

An extensible admin template powered by Nuxt.js and GITS UI.

## Features

- Integrated with [GITS UI](https://gitsindonesia.github.io/ui-component/)
- Dark mode ready
- Built-in Pages:
  - `/admin`
  - `/admin/profile`
- Customizable via Nuxt Layer
- Configurable via `app.config.ts`

## Demo

- [Online demo](https://gits-nuxt-admin.vercel.app/admin)
- [Source code](https://github.com/gitsindonesia/ui-component/tree/main/starter/nuxt-admin)
- Try it online on [Stackblitz](https://stackblitz.com/github/gitsindonesia/ui-component/tree/main/starter/nuxt-admin)

## Installation

```bash
npm i -D @gits-id/nuxt-admin
```

## Usage

Add it to the `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  extends: '@gits-id/nuxt-admin',
});
```

## Configuration

You can change the default options for admin pages like redirect url and head options via `app.config.ts`.

You can checkout the default configuration in the [source of this file](https://github.com/gitsindonesia/ui-component/tree/main/starter/nuxt-admin/app.config.ts).

## Components

To customize the components, just override the default components by creating file in your Nuxt app with the same as the theme.

| Component               | Path                                    |
| ----------------------- | --------------------------------------- |
| `AdminFooter`           | `components/admin/Footer.vue`           |
| `AdminHeader`           | `components/admin/Header.vue`           |
| `AdminNotification`     | `components/admin/Notification.vue`     |
| `AdminNotificationItem` | `components/admin/NotificationItem.vue` |
| `AdminPageTitle`        | `components/admin/PageTitle.vue`        |
| `AdminShell`            | `components/admin/Shell.vue`            |
| `AdminSidebar`          | `components/admin/Sidebar.vue`          |
| `DarkModeSwitcher`      | `components/DarkModeSwitcher.vue`       |

## Pages

To customize the pages, just override the default pages by creating file in your Nuxt app with the same as the theme.

| Path                      | Description            |
| ------------------------- | ---------------------- |
| `pages/admin/index.vue`   | The admin home page    |
| `pages/admin/profile.vue` | The admin profile page |

## Authentication

Combine with [`nuxt-auth`](/themes/nuxt-auth) to add authentication to the admin page.

## GITS UI

Checkout the [official documentation](https://gitsindonesia.github.io/ui-component/) to
learn more about `GITS UI`.

## License

MIT
