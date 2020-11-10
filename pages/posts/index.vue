<template>
  <div>

      <div data-v-50f93fd9="" class="title"><div data-v-50f93fd9="" class="content"><br data-v-50f93fd9=""> <h2 data-v-50f93fd9="">Articles</h2></div></div>

  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</div>
</template>

<script>
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
};
</script>


<style >
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
.datetag {
  border-radius: 3px !important;
  padding: 3px;
  color: #ffffff !important;
}
a:hover {
  text-decoration: none;
}

</style>
