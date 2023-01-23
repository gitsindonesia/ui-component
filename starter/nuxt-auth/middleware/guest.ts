export default defineNuxtRouteMiddleware(() => {
  const {status} = useSession();
  const appConfig = useAppConfig();

  if (status.value === 'authenticated') {
    return navigateTo(appConfig.auth.redirect.home);
  }
});
