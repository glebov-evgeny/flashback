<template>
  <form class="form" @submit.prevent>
      <h3 class="form__title">Добавить новость:</h3>
      <input
        type="text"
        class="form__input"
        v-model="post.title"
        placeholder="Заголовок"/>
      <input
        type="text"
        class="form__input"
        v-model="post.description"
        placeholder="Описание"/>
      <button 
        type="submit"
        class="form__button"
        @click="createPost"
        >Создать</button>
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
      this.post.id = Date.now();
      this.$emit('createPost', this.post)
      this.post = {
        title: '',
        description: ''
      }
    }
  },
  computed: {
   
  },
};
</script>
