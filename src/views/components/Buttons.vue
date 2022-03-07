<script setup>
import { ref } from "vue";
import SshPre from "simple-syntax-highlighter";
// import VBtn from "@gits/button";
import Docs from "./Docs.vue";

const breadcrumbs = ref([
  {
    to: "/cms",
    title: "Dashboard",
  },
  {
    to: "/cms/components",
    title: "Components",
  },
  {
    to: "/cms/components/buttons",
    title: "v-btns",
  },
]);
</script>

<template>
  <h1 class="font-bold mb-1 text-xl text-blue-900">Button</h1>
  <v-breadcrumbs :items="breadcrumbs" />

  <Docs title="Default">
    <template #preview>
      <v-btn> Default </v-btn>
      <v-btn color="primary"> Primary </v-btn>
      <v-btn color="secondary"> Secondary </v-btn>
      <v-btn color="info"> Info </v-btn>
      <v-btn color="warning"> Warning </v-btn>
      <v-btn color="success"> Success </v-btn>
      <v-btn color="error"> Error </v-btn>
    </template>

    <template #code>
      <pre>
&lt;v-btn&gt; Default &lt;/v-btn&gt;
&lt;v-btn color="primary"&gt; Primary &lt;/v-btn&gt;
&lt;v-btn color="secondary"&gt; Secondary &lt;/v-btn&gt;
&lt;v-btn color="info"&gt; Info &lt;/v-btn&gt;
&lt;v-btn color="warning"&gt; Warning &lt;/v-btn&gt;
&lt;v-btn color="success"&gt; Success &lt;/v-btn&gt;
&lt;v-btn color="error"&gt; Error &lt;/v-btn&gt;</pre
      >
    </template>
  </Docs>

  <Docs title="Sizing">
    <template #preview>
      <v-btn size="xs" color="primary"> v-btn </v-btn>
      <v-btn size="sm" color="primary"> v-btn </v-btn>
      <v-btn size="md" color="primary"> v-btn </v-btn>
      <v-btn size="lg" color="primary"> v-btn </v-btn>
      <v-btn size="xl" color="primary"> v-btn </v-btn>
    </template>
    <template #code>
      <pre>
&lt;v-btn size="xs" color="primary"&gt; v-btn &lt;/v-btn&gt;
&lt;v-btn size="md" color="primary"&gt; v-btn &lt;/v-btn&gt;
&lt;v-btn size="lg" color="primary"&gt; v-btn &lt;/v-btn&gt;</pre
      >
    </template>
  </Docs>

  <Docs title="Rounded">
    <template #preview>
      <v-btn rounded> Default </v-btn>
      <v-btn rounded color="primary"> Primary </v-btn>
      <v-btn rounded color="secondary"> Secondary </v-btn>
      <v-btn rounded color="info"> Info </v-btn>
      <v-btn rounded color="warning"> Warning </v-btn>
      <v-btn rounded color="success"> Success </v-btn>
      <v-btn rounded color="error"> Error </v-btn>
    </template>
    <template #code>
      <pre>
&lt;v-btn rounded&gt; Default &lt;/v-btn&gt;
&lt;v-btn rounded color=&quot;primary&quot;&gt; Primary &lt;/v-btn&gt;
&lt;v-btn rounded color=&quot;secondary&quot;&gt; Secondary &lt;/v-btn&gt;
&lt;v-btn rounded color=&quot;info&quot;&gt; Info &lt;/v-btn&gt;
&lt;v-btn rounded color=&quot;warning&quot;&gt; Warning &lt;/v-btn&gt;
&lt;v-btn rounded color=&quot;success&quot;&gt; Success &lt;/v-btn&gt;
&lt;v-btn rounded color=&quot;error&quot;&gt; Error &lt;/v-btn&gt;</pre
      >
    </template>
  </Docs>

  <Docs title="Outlined">
    <template #preview>
      <v-btn outlined> Default </v-btn>
      <v-btn outlined color="primary"> Primary </v-btn>
      <v-btn outlined color="secondary"> Secondary </v-btn>
      <v-btn outlined color="info"> Info </v-btn>
      <v-btn outlined color="warning"> Warning </v-btn>
      <v-btn outlined color="success"> Success </v-btn>
      <v-btn outlined color="error"> Error </v-btn>
    </template>
    <template #code>
      <pre>
&lt;v-btn outlined&gt; Default &lt;/v-btn&gt;
&lt;v-btn outlined color=&quot;primary&quot;&gt; Primary &lt;/v-btn&gt;
&lt;v-btn outlined color=&quot;secondary&quot;&gt; Secondary &lt;/v-btn&gt;
&lt;v-btn outlined color=&quot;info&quot;&gt; Info &lt;/v-btn&gt;
&lt;v-btn outlined color=&quot;warning&quot;&gt; Warning &lt;/v-btn&gt;
&lt;v-btn outlined color=&quot;success&quot;&gt; Success &lt;/v-btn&gt;
&lt;v-btn outlined color=&quot;error&quot;&gt; Error &lt;/v-btn&gt;</pre
      >
    </template>
  </Docs>

  <Docs title="Text">
    <template #preview>
      <v-btn text> Default </v-btn>
      <v-btn text color="primary"> Primary </v-btn>
      <v-btn text color="secondary"> Secondary </v-btn>
      <v-btn text color="info"> Info </v-btn>
      <v-btn text color="warning"> Warning </v-btn>
      <v-btn text color="success"> Success </v-btn>
      <v-btn text color="error"> Error </v-btn>
    </template>
    <template #code>
      <pre>
&lt;v-btn text&gt; Default &lt;/v-btn&gt;
&lt;v-btn text color=&quot;primary&quot;&gt; Primary &lt;/v-btn&gt;
&lt;v-btn text color=&quot;secondary&quot;&gt; Secondary &lt;/v-btn&gt;
&lt;v-btn text color=&quot;info&quot;&gt; Info &lt;/v-btn&gt;
&lt;v-btn text color=&quot;warning&quot;&gt; Warning &lt;/v-btn&gt;
&lt;v-btn text color=&quot;success&quot;&gt; Success &lt;/v-btn&gt;
&lt;v-btn text color=&quot;error&quot;&gt; Error &lt;/v-btn&gt;</pre
      >
    </template>
  </Docs>

  <Docs title="Icon">
    <template #preview>
      <v-btn icon> Default </v-btn>
      <v-btn icon color="primary"> Primary </v-btn>
      <v-btn icon color="secondary"> Secondary </v-btn>
      <v-btn icon color="info"> Info </v-btn>
      <v-btn icon color="warning"> Warning </v-btn>
      <v-btn icon color="success"> Success </v-btn>
      <v-btn icon color="error"> Error </v-btn>
    </template>
    <template #code>
      <pre>
&lt;v-btn icon&gt; Default &lt;/v-btn&gt;
&lt;v-btn icon color=&quot;primary&quot;&gt; Primary &lt;/v-btn&gt;
&lt;v-btn icon color=&quot;secondary&quot;&gt; Secondary &lt;/v-btn&gt;
&lt;v-btn icon color=&quot;info&quot;&gt; Info &lt;/v-btn&gt;
&lt;v-btn icon color=&quot;warning&quot;&gt; Warning &lt;/v-btn&gt;
&lt;v-btn icon color=&quot;success&quot;&gt; Success &lt;/v-btn&gt;
&lt;v-btn icon color=&quot;error&quot;&gt; Error &lt;/v-btn&gt;</pre
      >
    </template>
  </Docs>
</template>

<style scoped></style>
