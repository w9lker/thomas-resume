<script setup>
import { RouterView } from 'vue-router';

import { useHead } from '@unhead/vue'

useHead({
  title: 'Jacob Thomas',
  meta: [
    {
      name: 'description',
      content: 'Jacob Thomas is a sociologist who studies migration',
    },
    {
      name: 'keywords',
      content: 'Jacob Thomas, migration, sociology',
    },
  ],
})
  
</script>

<template>
  <html>
    <head>
      <!-- <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@800&family=Josefin+Sans:wght@700&family=Lora:wght@400;500&family=Montserrat:ital@1&family=Roboto&family=Vollkorn:wght@900&display=swap" rel="stylesheet">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="google-site-verification" content="fKQtY9HuzEjunquEyrMdubf3uSCu-oJuJf5-Y6nv7uI" /> -->
    </head>
    <body>
      <RouterView />
    </body>
  </html>
</template>