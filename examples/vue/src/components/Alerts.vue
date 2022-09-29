<template>
  <h3 class="text-2xl font-semibold mb-2 mt-5">Alert</h3>
  <div class="space-y-2">
    <v-alert> Lorem ipsum solor sit amet </v-alert>
    <v-alert color="primary"> Lorem ipsum solor sit amet </v-alert>
    <v-alert color="secondary"> Lorem ipsum solor sit amet </v-alert>
    <v-alert color="info"> Lorem ipsum solor sit amet </v-alert>
    <v-alert color="warning"> Lorem ipsum solor sit amet </v-alert>
    <v-alert color="success"> Lorem ipsum solor sit amet </v-alert>
    <v-alert color="error"> Lorem ipsum solor sit amet </v-alert>
    <v-alert color="indigo"> Custom alert with CSS Variables </v-alert>
  </div>
</template>

<style scoped>
.alert-indigo {
  --alert-bg-color: theme("colors.indigo.600");
  --alert-text-color: theme("colors.white");
  --alert-border-radius: theme("borderRadius.lg");
  --alert-border-color: theme("colors.indigo.600");
  --alert-border-width: theme("borderWidth.2");
  --alert-padding-x: theme("padding.6");
  --alert-padding-y: theme("padding.4");
}
</style>
