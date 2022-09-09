<template>
  <form class="form" @submit.prevent>
      <h3 class="form__title">Добавить новость:</h3>
      <BaseInput
        class="form__input"
        v-model="post.title"
        placeholder="Заголовок"/>
      <BaseInput
        class="form__input"
        v-model="post.description"
        placeholder="Описание"/>
      <BaseButton
        class="button form__button"
        type="submit"
        @click="createPost"
        >Создать</BaseButton>
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
        description: ''
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
          description: ''
        }
      }
    }
  },
  computed: {
   
  },
};
</script>
