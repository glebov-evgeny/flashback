<template>
  <div class="container">
    <h1 class="main__title">Cтраница с данными</h1>

    <PostList
        :posts="posts"
        @remove="removePost"
        v-if="!loading"
    />
    <BaseLoader v-else/>

    <BaseButton
        class="button main__button"
        @click="popupOpen"
        v-if="posts.length > 0"
    >Добавить</BaseButton>


    <BasePopup
        v-model:show="popupIsOpen" >
        <PostForm
            @createPost="createPost"
        />
    </BasePopup>
  </div>
</template>

<script>
import {API_BASE_URL} from "@/config";
import axios from 'axios';
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
      posts: [],
      popupIsOpen: false,
      loading: true
    }
  },
  methods: {
    createPost(post){
      this.posts.push(post)
      this.popupIsOpen = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    popupOpen() {
      this.popupIsOpen = true
    },
    async fetchPosts() {
      try {
        this.loading = true
        const response = await axios.get(`${API_BASE_URL}?_limit=5`)
        this.posts = response.data
        this.loading = false
      } catch (e) {
        alert(`Ошибка: ${e}`)
      } finally {
        this.loading = false
      }
    }
  },
  mounted() {
    this.fetchPosts()
  },
};
</script>

<style scoped lang="scss">
.loader{
  width: 100px;
  height: 100px;
  border-radius: 100%;
  position: relative;
  margin: 0 auto;
}
#loader-1:before, #loader-1:after{
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 10px solid transparent;
  border-top-color: #3498db;
}

#loader-1:before{
  z-index: 100;
  animation: spin 1s infinite;
}

#loader-1:after{
  border: 10px solid #ccc;
}

@keyframes spin{
  0%{
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100%{
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>