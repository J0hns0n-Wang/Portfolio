<template>
  <section id="home">
      <div class="banner" ref="halo">
          <h1>Johnson Wang</h1>
          <p>High School Fullstack Web Developer</p>
      </div>
    </section>
</template>

<script>
import HALO from "vanta/src/vanta.halo"
import gsap from'gsap'

export default {
name:"home",
mounted(){
    this.vantaEffect = HALO({
  el: this.$refs.halo,
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  backgroundColor: 0x131843
})
},
data(){
    return{

    }
}
}
</script>

<style>

</style>