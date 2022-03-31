<template>
  <div>
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/NavbarComponent.vue'

export default {
  name: 'App',
  components: {
    'nav-bar' : Navbar
  }
}
</script>