<script setup>
import { ref, computed } from 'vue'
import Home from './components/Home.vue'
import Research from './components/Research.vue'
import Teaching from './components/Teaching.vue'
import Awards from './components/Awards.vue'
import Contact from './components/Contact.vue'

const routes = {
  '/': Home,
  '/research': Research,
  '/teaching': Teaching,
  '/awards': Awards,
  '/contact': Contact,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})
const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

</script>

<template>
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  </head>
  <body>
    <div class="nav-menu">
      <div class="flex-container">
          <div class = "name">
            <h1>Jacob Thomas</h1>
          </div>
          <div class = "links">
            <a href="#/">Home</a>
            <a href="#/research">Research</a>
            <a href="#/teaching">Teaching</a>
            <a href="#/awards">Awards</a>
            <a href="#/contact">Contact</a>
        </div>
      </div>
    </div>
    <div class="view">
      <component :is="currentView" />
    </div>
  </body>
</template>

<style scoped>
  .nav-menu {
    left: 0;
    right: 0;
    position: sticky;
    top:0;
    background-color: black;
    color: white;
    margin: 0;
    padding: 0 20px;
  }
  .flex-container {
    justify-content: space-between;
    display: flex;
    align-items: center;
  }
  .name {
    display: flex;
  }
  .links {
    justify-content: center;
    display: flex;
  }
  .links > a {
    color: white;
    padding: 0 20px;
    text-decoration: none;
    font-size: large;
  }
</style>
