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
const map = {
  '/': 'Home',
  '/research': 'Research',
  '/teaching': 'Teaching',
  '/awards': 'Awards',
  '/contact': 'Contact',
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  document.getElementById(map[currentPath.value.slice(1) || '/']).style.textDecoration="none";
  currentPath.value = window.location.hash
  console.log(document.getElementById(map[currentPath.value.slice(1) || '/']))
  document.getElementById(map[currentPath.value.slice(1) || '/']).style.textDecoration="underline white solid 5px";
})
const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

</script>

<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  </head>
  <body>
    <div class="nav-menu">
      <div class="nav-menu-wrapper wrapper flex-container">
          <div class = "name">
            <h1>Jacob Thomas</h1>
          </div>
          <div class = "links">
            <a id="Home" href="#/">Home</a>
            <a id="Research" href="#/research">Research</a>
            <a id="Teaching" href="#/teaching">Teaching</a>
            <a id="Awards" href="#/awards">Awards</a>
            <a id="Contact" href="#/contact">Contact</a>
            <a id="CV" href="../public/CV-Thomas.pdf">CV</a>
        </div>
      </div>
    </div>
    <div class="view wrapper">
      <component :is="currentView" />
    </div>
  </body>
</template>

<style scoped>
  .links > a{
    padding: 0 20px;
    font-size: large;
    color:white;
    text-decoration: none;
    position: relative;
  }
  .links > a::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background-color: white;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
  }
  .links > a:hover::before{
    transform-origin: left;
    transform: scaleX(1);
  }
  .wrapper {
    margin-left:auto;
    margin-right:auto;
    max-width: 1200px;
    padding-right: 10px; 
    padding-left:  10px;
  }
  .nav-menu {
    left: 0;
    right: 0;
    position: sticky;
    top:0;
    background-color: black;
    color: white;
    margin: 0;
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
  
</style>
