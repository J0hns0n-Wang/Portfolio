<template>
   <nav class="container">
    <!-- <input id="nav-toggle" type="checkbox" /> -->
    <NuxtLink class="logo" to="/">John<strong>son</strong>      Wang</NuxtLink>
    <div class="home_underline"></div>
    <ul class="links">
      <li class="list">
       <NuxtLink class="route" to="/projectsView">Projects</NuxtLink>
        <div class="home_underline"></div>
      </li>
      <li class="list">
        <NuxtLink class="route" to="/" target="_blank">Resume</NuxtLink>
        <div class="home_underline"></div>
      </li>
      <li class="list">
       <NuxtLink class="route" to="/aboutView">About</NuxtLink>
        <div class="home_underline"></div>
      </li>
      <NuxtLink class="button" to="mailto:johnsonwang529@gmail.com" >Contact</NuxtLink>
    </ul>
    <label for="nav-toggle" class="icon-burger">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </label>
      <!-- <div class="header">
    <img src="https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
    <img src="https://images.unsplash.com/photo-1652021174975-81ddc1d8dd46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80" alt="" />
    <img src="https://images.unsplash.com/photo-1651972824059-96e321c58ec8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
  </div> -->
  </nav>
  
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
/* .navbar {
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
} */

/* .route{
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 1.25rem;
} */

/* .logo{
  font-size: 1.5rem;
} */




/* * {
  margin: 0;
  padding: 0;
  background-color: rgb(31, 31, 31);
} */


.container {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  /* margin: 30px 160px ; */
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), #03a090);
  width: 100vw;
  padding: 1.2rem 5rem;
}
/* aee5d8 */

/* 03a090 */
@media screen and (max-width: 1024px) {
  .container {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    display: flex;
    margin: 30px 80px 30px 80px;
    justify-content: space-between;
    align-items: center;
  }
}

nav {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  color: white;
}

nav .logo {
  font-size: 2rem;
  text-decoration: none;
  color: white;
  z-index: 9;
}

nav .links {
  display: flex;
  gap: 60px;
  list-style: none;
  justify-content: center;
  align-items: center;
}

nav .links .route {
  color: white;
  text-decoration: none;
  cursor: pointer;
  font-weight: 400;
}

nav li {
  overflow: hidden;
  transition: 0.5s cubic-bezier(0.97, 0.02, 0.44, 0.99);
}

.home_underline {
  transform: translateX(-70px);
  width: auto;
  height: 2px;
  background-color: white;
  transition: 0.5s cubic-bezier(0.97, 0.02, 0.44, 0.99);
}

/* .logo:hover > .home_underline {
  transform: translatex(0px);
} */

.list:hover > .home_underline {
  transform: translatex(0px);
}

.button {
  border: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  color: white;
  background-color: goldenrod;
  border-radius: 100px;
  padding: 10px 30px 10px 30px;
  transform-origin: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
}

.button::before {
  content: " ";
  position: absolute;
  top: 0px;
  width: 40px;
  height: 40px;
  transform: skewX(40deg) translateX(-90px);
  background-color: rgba(255, 255, 255, 0.411);
  z-index: 99;
  transition: 0.8s cubic-bezier(0.97, 0.02, 0.44, 0.99);
}

.button:hover::before {
  transform: skewX(40deg) translateX(100px);
  animation: btnshine 1s cubic-bezier(0.97, 0.02, 0.44, 0.99) infinite;
}
@keyframes btnshine {
  from {
    transform: skewX(40deg) translateX(-90px);
  }
  to {
    transform: skewX(40deg) translateX(100px);
  }
}

#nav-toggle {
  position: absolute;
  display: none;
}

nav .icon-burger {
  position: absolute;
  right: 5%;
  display: none;
}

nav .icon-burger .line {
  width: 30px;
  height: 4px;
  background-color: white;
  margin: 5px;
  border-radius: 5px;
}

@media screen and (max-width: 768px) {
  nav .logo {
    z-index: 99;
  }
  .container {
    margin: 30px 10px 30px 30px;
  }
  nav .links {
    float: none;
    position: fixed;
    top: 0;
    left: 100%;
    right: 0;
    bottom: 0;
    z-index: 9;
    width: auto;
    height: auto;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 0px 0px 60px;
    background-color: rgba(0, 0, 0, 0.568);
    backdrop-filter: blur(20px);
    overflow: hidden;
    transition: 0.5s cubic-bezier(0.97, 0.02, 0.44, 0.99);
  }
  .home_underline {
    display: none;
  }
  /* button {
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    color: white;
    background-color: blueviolet;
    border-radius: 100px;
    padding: 10px 40px 10px 40px;
  } */

  nav .links .route {
    font-family: Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    font-size: 3rem;
    color: white;
    font-weight: 600;
  }
  nav .icon-burger {
    z-index: 9;
    display: block;
    caret-color: transparent;
  }
  nav :checked ~ .links {
    left: 0;
  }
  nav .icon-burger .line {
    transition: 0.3s cubic-bezier(0.97, 0.02, 0.44, 0.99);
  }
  nav :checked ~ .icon-burger .line:nth-child(1) {
    transform: translateY(9px) rotate(50deg);
  }
  nav :checked ~ .icon-burger .line:nth-child(2) {
    transform: translateX(10px);
    opacity: 0;
  }
  nav :checked ~ .icon-burger .line:nth-child(3) {
    transform: translateY(-9px) rotate(-50deg);
  }
}

/* ----------header---------------- */

.header {
  display: flex;
  flex-direction: column;
}
.header img {
  width: 100%;
}

img:nth-child(2) {
  opacity: 1;
}

</style>