<script setup lang="ts">
import {ref} from 'vue';

const breadcrumbs = ref([
  {
    to: '/components',
    title: 'Components',
  },
  {
    to: '/components/forms',
    title: 'Forms',
  },
]);
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">Forms</DocsTitle>

  <Docs
    title="Default"
    :code="`<form>
  <v-form-group id=&quot;fullName&quot; label=&quot;Full Name&quot;>
    <v-input id=&quot;fullName&quot; placeholder=&quot;Full Name&quot; />
  </v-form-group>
  <v-form-group id=&quot;email&quot; label=&quot;Email&quot;>
    <v-input id=&quot;email&quot; type=&quot;email&quot; placeholder=&quot;Email&quot; />
  </v-form-group>
  <v-form-group id=&quot;sex&quot; label=&quot;Sex&quot;>
    <v-radio id=&quot;sex&quot; name=&quot;sex&quot; label=&quot;Male&quot; />
    <v-radio id=&quot;sex&quot; name=&quot;sex&quot; label=&quot;Female&quot; />
  </v-form-group>
  <v-form-group id=&quot;age&quot; label=&quot;Age&quot;>
    <div class=&quot;w-28&quot;>
      <v-input id=&quot;age&quot; type=&quot;number&quot; placeholder=&quot;Age&quot; />
    </div>
  </v-form-group>
  <v-form-group id=&quot;password&quot; label=&quot;Password&quot;>
    <v-input id=&quot;password&quot; type=&quot;password&quot; placeholder=&quot;Password&quot; />
  </v-form-group>
  <v-form-group id=&quot;avatar&quot; label=&quot;Avatar&quot;>
    <v-file-upload id=&quot;avatar&quot; placeholder=&quot;Select File&quot; />
  </v-form-group>
  <v-form-group id=&quot;bio&quot; label=&quot;Bio&quot;>
    <v-textarea id=&quot;bio&quot; placeholder=&quot;Enter your bio&quot; />
  </v-form-group>
  <v-form-group>
    <v-checkbox label=&quot;I agree with ToC&quot; />
  </v-form-group>
  <div class=&quot;space-x-2&quot;>
    <v-btn color=&quot;primary&quot;>Submit</v-btn>
    <v-btn>Reset</v-btn>
  </div>
</form>`"
  >
    <template #preview>
      <form>
        <v-form-group id="fullName" label="Full Name">
          <v-input id="fullName" placeholder="Full Name" />
        </v-form-group>
        <v-form-group id="email" label="Email">
          <v-input id="email" type="email" placeholder="Email" />
        </v-form-group>
        <v-form-group id="sex" label="Sex">
          <v-radio id="sex" name="sex" label="Male" />
          <v-radio id="sex" name="sex" label="Female" />
        </v-form-group>
        <v-form-group id="age" label="Age">
          <div class="w-28">
            <v-input id="age" type="number" placeholder="Age" />
          </div>
        </v-form-group>
        <v-form-group id="password" label="Password">
          <v-input id="password" type="password" placeholder="Password" />
        </v-form-group>
        <v-form-group id="avatar" label="Avatar">
          <v-file-upload id="avatar" placeholder="Select File" />
        </v-form-group>
        <v-form-group id="bio" label="Bio">
          <v-textarea id="bio" placeholder="Enter your bio" />
        </v-form-group>
        <v-form-group>
          <v-checkbox label="I agree with ToC" />
        </v-form-group>
        <div class="space-x-2">
          <v-btn color="primary">Submit</v-btn>
          <v-btn>Reset</v-btn>
        </div>
      </form>
    </template>
  </Docs>

  <Docs
    title="Login"
    :code="`<form>
  <v-form-group id=&quot;email&quot; label=&quot;Email&quot;>
    <v-input id=&quot;email&quot; type=&quot;email&quot; placeholder=&quot;Email&quot; />
  </v-form-group>
  <v-form-group id=&quot;password&quot; label=&quot;Password&quot;>
    <v-input id=&quot;password&quot; type=&quot;password&quot; placeholder=&quot;Password&quot; />
  </v-form-group>
  <v-form-group>
    <v-checkbox label=&quot;Keep me sign in&quot; />
  </v-form-group>
  <div class=&quot;space-x-2&quot;>
    <v-btn color=&quot;primary&quot;>Login</v-btn>
  </div>
</form>`"
  >
    <template #preview>
      <form>
        <v-form-group id="email" label="Email">
          <v-input id="email" type="email" placeholder="Email" />
        </v-form-group>
        <v-form-group id="password" label="Password">
          <v-input id="password" type="password" placeholder="Password" />
        </v-form-group>
        <v-form-group>
          <v-checkbox label="Keep me sign in" />
        </v-form-group>
        <div class="space-x-2">
          <v-btn color="primary">Login</v-btn>
        </div>
      </form>
    </template>
  </Docs>
</template>
