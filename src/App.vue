<script setup>
import { ref, computed } from 'vue'
import Home from './components/Home.vue'
import Research from './components/Research.vue'
import Teaching from './components/Teaching.vue'
import Awards from './components/Awards.vue'
import AboutMe from './components/AboutMe.vue'

const routes = {
  '/': Home,
  '/research': Research,
  '/teaching': Teaching,
  '/awards': Awards,
  '/aboutme':AboutMe,
}
const map = {
  '/': 'Home',
  '/research': 'Research',
  '/teaching': 'Teaching',
  '/awards': 'Awards',
  '/aboutme':'AboutMe',
}

const currentPath = ref(window.location.hash)
var navbar = null;

window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

window.addEventListener("load", (event) => {
  document.getElementById(map[currentPath.value.slice(1) || '/']).style.textDecoration="underline white solid 5px";
  console.log(document.getElementById("CV"));
  navbar = document.getElementById("nav");
  console.log(navbar)
});
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
  <html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@800&family=Josefin+Sans:wght@700&family=Lora:wght@400;500&family=Montserrat:ital@1&family=Roboto&family=Vollkorn:wght@900&display=swap" rel="stylesheet">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
      <div class="content">
        <div id="nav" class="nav-menu-fixed">
          <div class="nav-menu-wrapper wrapper flex-container">
              <div class = "name">
                <h1>Jacob Thomas</h1>
              </div>
              <div class = "links">
                <a id="Home" href="#/">Home</a>
                <a id="AboutMe" href="#/aboutme">About Me</a>
                <a id="Research" href="#/research">Research</a>
                <a id="Teaching" href="#/teaching">Teaching</a>
                <a id="Awards" href="#/awards">Awards</a>
                <a id="CV" href="CV-Thomas.pdf">CV</a>
            </div>
          </div>
        </div>
        <div class="contents">
          <component :is="currentView" />
        </div>
      </div>
      <footer class="footer">
        <div class="wrapper footer-content">
          <div>
            Department of Sociology, The Chinese University of Hong Kong<br/>
            Email: <a href="mailto:j.thomas@cuhk.edu.hk">j.thomas@cuhk.edu.hk</a><br/>
          </div>
        </div>
      </footer>
    </body>
  </html>
</template>

<style scoped>
  html, body {
    font-family: 'Lora', serif;
    min-height: 100vh;
  }
  body {
    display: flex;
    flex-direction: column;
  }
  .content {
    flex: 1 0 auto;
  }
  .footer-content > div > a:link{
    color:white;
  }
  .footer-content{
    height:100%;
    display:flex;
    align-items:center;
  }
  .footer{
    color:white;
    flex-shrink: 0;
    height:150px;
    background-color: rgb(75, 75, 75);
  }

  .nav-active{
    background-color:#333 !important;
  }
  .links > a{
    font-family: 'Josefin Sans', sans-serif;
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
  .nav-menu-fixed {
    z-index:10;
    padding: 10px 0px;
    left: 0;
    right: 0;
    position: sticky;
    top:0;
    background-color: rgb(62, 60, 60);
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
    font-weight: 900;
    font-family: 'Josefin Sans', sans-serif;
  }
  .links {
    justify-content: center;
    display: flex;
  }
  
</style>
