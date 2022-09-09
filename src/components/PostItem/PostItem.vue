<template>
  <div class="post">
    <div class="post__block">
      <p class="post__text"><strong>Название:</strong> {{post.title}}</p>
      <p class="post__text"><strong>Описание:</strong> {{post.body}}</p>
    </div>
    <div class="post__btns">
      <BaseButton
          @click="$emit('remove', post)"
      >Удалить</BaseButton>
    </div>
  </div>
</template>

<script>
import "./PostItem.scss";

export default {
  name: "PostItem",
  components:{

  },
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
