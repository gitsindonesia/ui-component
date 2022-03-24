<script>
import feather from 'feather-icons';

const icons = Object.keys(feather.icons);

export default {
  data() {
    return {
      icons,
      keyword: '',
    };
  },

  methods: {
    input(event) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.filter(event.target.value);
      }, 300);
    },

    filter(value) {
      value = value.trim().toLowerCase();
      this.icons = icons.filter((icon) => icon.indexOf(value) !== -1);
      this.keyword = value;
    },
  },
};
</script>

<template>
  <h1 class="text-4xl mb-5 font-bold">Feather Icons</h1>

  <v-btn to="/icons/iconify">View Iconify Icons</v-btn>

  <p class="my-5">
    <v-input placeholder="Search icons..." :value="keyword" @input="input" />
  </p>
  <ul class="icons">
    <li v-for="icon in icons" :key="icon">
      <vue-feather :type="icon"></vue-feather>
      <span>{{ icon }}</span>
    </li>
  </ul>
</template>

<style scoped>
.icons {
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  list-style: none;
  margin: 0;
  padding: 0;
}

.icons > li {
  background-color: #f8f8f8;
  padding: 0.5rem 1rem;
  transition: color 0.15s;
}

.icons > li:hover {
  color: #0074d9;
}

.icons > li > i {
  vertical-align: middle;
}

.icons > li > span {
  color: gray;
  margin-left: 0.5rem;
  transition: color 0.15s;
}

.icons > li:hover > span {
  color: inherit;
}
</style>
