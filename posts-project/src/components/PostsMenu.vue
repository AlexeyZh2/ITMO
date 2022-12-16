<template>
  <!-- PostsMenu.vue -->
  <nav>
    <router-link v-for="link in menuLinks"
                 :to="link.href"
                 :key="link.href">
      {{ link.title }}
    </router-link>
  </nav>
</template>

<script>
export default {
  props: {
    menuLinks: Array
  }
}
</script>

