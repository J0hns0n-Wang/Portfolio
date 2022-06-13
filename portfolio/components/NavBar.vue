<template>
  <section class="navbar">
    <NuxtLink class="route" to="/">
      <div class="logo">
       Logo
      </div>
    </NuxtLink>
    <div class="menu">
      <NuxtLink class="route" to="/projectsView">Projects</NuxtLink>
      <NuxtLink class="route" to="/resumeView">Resume</NuxtLink>
      <NuxtLink class="route" to="/contactsView">Contact</NuxtLink>
    </div>
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
  margin: 2rem;
}

.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 30%;
}

.route{
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 1.25rem;
}

.logo{
  font-size: 1.5rem;
}
</style>