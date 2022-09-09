<template>
  <div v-if="posts.length > 0">
    <PostItem
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove', post)"
    />
  </div>
  <h2 v-else class="main__title">Упс... всё закончилось.</h2>
</template>

<script>
import "./PostList.scss";
import PostItem from '@/components/PostItem/PostItem.vue'

export default {
  name: "PostList",
  components:{
    PostItem
},
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  computed: {
   
  },
};
</script>
