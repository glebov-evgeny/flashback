<template>
  <div class="container">
    <h1 class="main__title">Cтраница с данными</h1>
    <div class="main__filter" v-if="posts.length > 0">
      <h1 class="main__subtitle">Фильтр:</h1>
      <BaseSelect
        v-model="selectedSort"
        :options="selectedOptions"
      />
    </div>

    <PostList
        :posts="sortedPosts"
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
      loading: true,
      selectedSort: '',
      selectedOptions: [
        {value:'title', name: 'По названию'},
        {value:'body', name: 'По описанию'}
      ]
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
  computed: {
    sortedPosts() {
      return [...this.posts].sort((a, b) => a[this.selectedSort]?.localeCompare(b[this.selectedSort]))
    }
  }
};
</script>