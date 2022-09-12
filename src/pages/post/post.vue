<template>
  <div class="container">
    <h1 class="main__title">Страница поста c id = {{ $route.params.id }}</h1>
    <router-link class="main__link" to="/">Main</router-link>
    <PostItem/>
  </div>
</template>

<script>

import PostItem from "@/components/PostItem/PostItem";
export default {
  name: "postPage",
  components: {
    PostItem
  },
};
</script>
