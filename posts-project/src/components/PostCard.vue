<template>
  <!-- PostCard.vue -->
  <div>
    <h2>{{ post.title }}</h2>
    <router-link :to="'/post/' + post.id">
      Читать
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>

<style scoped>

</style>