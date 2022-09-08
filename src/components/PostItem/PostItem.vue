<template>
  <div class="post">
    <p class="post__text"><strong>Название:</strong> {{post.title}}</p> 
    <p class="post__text"><strong>Описаине:</strong> {{post.description}}</p> 
  </div>
</template>

<script>
import "./PostItem.scss";

export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
   
  },
};
</script>
