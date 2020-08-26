// <template>
//   <div class="container">
//     <div>
//       <Logo />
//       <h1 class="title">
//         concentration
//       </h1>
//       <div class="links">
//         <a
//           href="https://nuxtjs.org/"
//           target="_blank"
//           rel="noopener noreferrer"
//           class="button--green"
//         >
//           Documentation
//         </a>
//         <a
//           href="https://github.com/nuxt/nuxt.js"
//           target="_blank"
//           rel="noopener noreferrer"
//           class="button--grey"
//         >
//           GitHub
//         </a>
//       </div>
//     </div>
//   </div>
// </template>

<template>
  <!-- <nuxt-link to="/one">Home page</nuxt-link>
  <nuxt-link to="/one1">error page</nuxt-link> -->
  <nuxt-link to="/helloworld">hello page</nuxt-link>
</template>

<script lang="ts">

import Vue from 'vue'

// export default Vue.extend({})
export default {
    layout:'sidebar',
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
