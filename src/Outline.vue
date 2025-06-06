<script setup>
import { ref, computed } from 'vue'
import { RouterView, RouterLink} from 'vue-router'

import { watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const path_to_component = {
  "/": "Home",
  "/research": "Research",
  "/teaching": "Teaching",
  "/awards": "Awards",
  "/aboutme": "AboutMe",
};
const current_active = ref("Home");
watch(
  () => route.fullPath,
  async () => {
    // cancel all the styles for the current_active element
    document.getElementById(current_active.value).style.textDecoration = "none";

    // get the current elements and underline it
    current_active.value = path_to_component[route.fullPath];
    document.getElementById(current_active.value).style.textDecoration = "underline white solid 5px";

  }
);

</script>

<template>
  <html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@800&family=Josefin+Sans:wght@700&family=Lora:wght@400;500&family=Montserrat:ital@1&family=Roboto&family=Vollkorn:wght@900&display=swap" rel="stylesheet">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="google-site-verification" content="fKQtY9HuzEjunquEyrMdubf3uSCu-oJuJf5-Y6nv7uI" />
    </head>
    <body>
      <div class="content">
        <div id="nav" class="nav-menu-fixed">
          <div class="nav-menu-wrapper wrapper flex-container">
              <div class = "name">
                <h1>Jacob Thomas</h1>
              </div>
              <div class = "links">
                <RouterLink to="/" id="Home">Home</RouterLink>
                <RouterLink to="/research" id="Research">Research</RouterLink>
                <RouterLink to="/teaching" id="Teaching">Teaching</RouterLink>
                <RouterLink to="/awards" id="Awards">Awards</RouterLink>
                <a id="CV" href="CV-Thomas.pdf">CV</a>
                <RouterLink to="/aboutme" id="AboutMe">About Me</RouterLink>
            </div>
          </div>
        </div>
        <div class="contents">
          <RouterView />
        </div>
      </div>
      <footer class="footer">
        <div class="wrapper footer-content">
          <div>
            Department of Sociology, Corvinus University of Budapest<br/>
            Email: <a href="mailto:jrt@uni-corvinus.hu">jrt@uni-corvinus.hu</a><br/>
          </div>
          <div class="links">
            <ul class="flex-container">
                <li>
                    <a href="mailto:jrt@uni-corvinus.hu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jacob-thomas-%E5%94%90%E9%BE%99%EF%BC%89-8a5ab314/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="../../public/CV-Thomas.pdf">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-file-earmark-person-fill" viewBox="0 0 16 16">
                            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755z"/>
                        </svg>
                    </a>
                </li>
            </ul>
          </div>
        </div>
      </footer>
    </body>
  </html>
</template>

<style scoped>
  .flex-container {
    justify-content: center;
    display: flex;
    align-items: center;
  }
  .links > ul > li:hover{
      transform: scale(1.3);
      transition: transform 0.5s;
  }
  .links > ul{
      padding-inline-start: 0px;
      list-style-type: none;
  }
  .links > ul > li{
      display: inline;
      padding:10px
  }
  .links > ul > li a{
      color:white;
  }
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
    justify-content: space-between;
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
    height: 6px;
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