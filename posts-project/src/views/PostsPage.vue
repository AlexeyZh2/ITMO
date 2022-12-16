<template>
  <!-- PostsPage.vue -->
  <div>Все записи</div>
  <post-card
      v-for="post in posts"
      :post="post"
      :key="post.id"/>
</template>
<script>
import PostCard
  from "@/components/PostCard";
export default {
  components: {PostCard},
  data(){
    return { posts: null }
  },
  created() {
    // XMLHttpRequest -> axios
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => this.posts = data)
  }
}

</script>