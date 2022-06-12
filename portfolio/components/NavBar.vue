<template>
  <section class="navbar">
    <NuxtLink to="/">
      <div class="logo">
        {{ name }}
      </div>
    </NuxtLink>
    <div class="menu">
      <NuxtLink to="/">Projects</NuxtLink>
      <NuxtLink to="/">Resume</NuxtLink>
      <NuxtLink to="/">Contact</NuxtLink>
    </div>
    <button @click="test()">Submit</button>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      name: null,
    };
  },

  methods: {
      test: function (){
          this.name = "Johnson"
      }
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-around;
}

.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 50%;
}
</style>