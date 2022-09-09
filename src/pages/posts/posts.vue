<template>
  <div class="container">
    <h1 class="main__title">Cтраница с данными</h1>
    <PostForm
        @createPost="createPost"
    />
    <PostList
        :posts="posts"
        @remove="removePost"
    />
  </div>
</template>

<script>
import PostForm from '@/components/PostForm/PostForm.vue';
import PostList from '@/components/PostList/PostList.vue';

export default {
  name: "PostPage",
  components:{
    PostForm,
    PostList
  },
  data(){
    return{
      posts: [
        {
          id: 1,
          title: 'Заголовок 1',
          description: 'Описание новости 1'
        },
        {
          id: 2,
          title: 'Заголовок 2',
          description: 'Описание новости 2'
        },
        {
          id: 3,
          title: 'Заголовок 3',
          description: 'Описание новости 3'
        },
        {
          id: 4,
          title: 'Заголовок 4',
          description: 'Описание новости 4'
        }
      ]
    }
  },
  methods: {
    createPost(post){
      this.posts.push(post)
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    }
  }
};
</script>
