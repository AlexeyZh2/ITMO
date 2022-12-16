<template>
  <!-- PostPage.vue -->
  <div v-if="loading">Loading...</div>
  <div v-if="!loading">
    <h2>{{ postInfo.title }}</h2>
    <p>{{ postInfo.body }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postInfo: null,
      loading: true
    }
  },
  created() {
    let id = this.$route.params.id;
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(response => response.json())
        .then(data => {
          this.postInfo = data;
          this.loading = false;
        })
  }
}
</script>

<style scoped>

</style>