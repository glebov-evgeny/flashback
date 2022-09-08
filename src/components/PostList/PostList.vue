<template>
  <PostItem v-for="post in posts" :key="post.id" :post="post"/>
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
