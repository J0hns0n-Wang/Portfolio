<template>
  <section id="home">
      <div id="banner" class="banner" ref="haloRef">
          <h1>Johnson Wang</h1>
          <p>High School Fullstack Web Developer</p>
      </div>
    </section>
</template>

<script>

// import HALO from 'vanta/src/vanta.halo'
// import gsap from'gsap'
// import * as three from "three"


export default {
name:"home",
// mounted(){
//   this.vantaEffect = HALO({
//   el: this.$refs.haloRef,
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.00,
//   minWidth: 200.00,
//   backgroundColor: 0x131843,
//   // three: window.three
// })
// },
data(){
    return{

    }
}
}
</script>

<style scoped>
.banner{
    height: 100vh;
  width: 100%;
  overflow: hidden;
}
</style>