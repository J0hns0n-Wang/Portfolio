<template>
  <section class="navbar">
      <NuxtLink to="/">
          <div class="logo">
              Logo
          </div>
      </NuxtLink>
      <div class="menu">
          
             <NuxtLink to="/">Projects</NuxtLink>
             <NuxtLink to="/">Resume</NuxtLink>
             <NuxtLink to="/">Contact</NuxtLink>
        
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar{
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-around;
}

.menu{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 50%;
}


</style>