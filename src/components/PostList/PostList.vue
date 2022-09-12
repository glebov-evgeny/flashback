<template>
  <div v-if="posts.length > 0">
    <transition-group name="post-list-animation">
      <PostItem
          v-for="post in posts"
          :key="post.id"
          :post="post"
          @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <h2 v-else class="main__title">Упс... ничего нет.</h2>
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

<style scoped lang="scss">
.post-list-animation-enter-active,
.post-list-animation-leave-active {
  transition: all 0.3s ease;
}
.post-list-animation-enter-from,
.post-list-animation-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
</style>