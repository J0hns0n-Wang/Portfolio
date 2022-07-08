import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
 app:{
  head: {
    title: "Johnson Wang",
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      // <meta name="viewport" content="width=device-width, initial-scale=1">
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    // script: [
    //     // <script src="https://myawesome-lib.js"></script>
    //     { src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js' },
    //     { src: 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js' },
    //     { src: "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.min.js"}
    //   ],
    link: [
      // <link rel="stylesheet" href="https://myawesome-lib.css">
      { rel: 'stylesheet', href: 'https://awesome-lib.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/assets/icon.png' }
    ],
    components: true,
    gsap: {
      extraPlugins: {
        scrollTo: true,
        scrollTrigger: true,
      },
    },
    
    // // please note that this is an area that is likely to change
    // style: [
    //   // <style type="text/css">:root { color: red }</style>
    //   { children: ':root { color: red }', type: 'text/css' }
    // ]
  },
  


 }

})
