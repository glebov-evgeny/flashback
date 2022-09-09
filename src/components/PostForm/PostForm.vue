<template>
  <form class="form" @submit.prevent>
      <h3 class="form__title">Добавить запись:</h3>
      <BaseInput
        class="form__input"
        v-model.trim="post.title"
        placeholder="Заголовок"/>
      <BaseInput
        class="form__input"
        v-model.trim="post.body"
        placeholder="Описание"/>
      <BaseButton
        class="button form__button"
        type="submit"
        @click="createPost"
        >Добавить</BaseButton>
    </form>
</template>

<script>
import "./PostForm.scss";

export default {
  name: "PostForm",
  props: {},
  data(){
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods:{
    createPost(){
      if(this.post.title !== '' && this.post.description !== '' ){
        this.post.id = Date.now();
        this.$emit('createPost', this.post)
        this.post = {
          title: '',
          body: ''
        }
      }
    }
  },
  computed: {
   
  },
};
</script>
