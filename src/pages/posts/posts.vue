<template>
  <div class="container">
    <h1 class="main__title">Cтраница с данными</h1>

    <div class="main__filter" v-if="posts.length > 0">
      <div class="main__filter-item">
        <h2 class="main__subtitle">Фильтр:</h2>
        <BaseSelect
            v-model="selectedSort"
            :options="selectedOptions"
        />
      </div>
      <div class="main__filter-item">
        <h2 class="main__subtitle">Поиск:</h2>
        <BaseInput
            class="form__input"
            v-model.trim="searchQuery"
            placeholder="Search something"/>
      </div>
    </div>
    <BaseButton
        class="button main__button"
        @click="popupOpen"
        v-if="posts.length > 0"
    >Добавить</BaseButton>
    <PostList
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
        v-if="!loading"
    />

    <BaseLoader v-else/>



    <div
        class="main__observer"
        ref="main__observer"
    ></div>
    <!-- Блок с пагинацией -->
    <!--    <div class="main__wrapper">      -->
    <!--      <div-->
    <!--          v-for="currentPage in totalPages"-->
    <!--          :key="currentPage"-->
    <!--          class="main__wrapper-tab"-->
    <!--          :class="{-->
    <!--            '_isCurrent': page === currentPage-->
    <!--          }"-->
    <!--          @click="pageChanged(currentPage)"-->
    <!--      >{{ currentPage }}</div>-->
    <!--    </div>-->

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
      ],
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
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
    // pageChanged(currentPage){
    //   this.page = currentPage;
    // },
    popupOpen() {
      this.popupIsOpen = true
    },
    async fetchPosts() {
      try {
        this.loading = true
        const response = await axios.get(`${API_BASE_URL}`, {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        /* общее количество постов приходящих с jsonplaceholder делится на лимит постов с округлением в большую сторону  */
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data
        this.loading = false
      } catch (e) {
        alert(`Ошибка: ${e}`)
      } finally {
        this.loading = false
      }
    },
    async loadMorePosts() {
      try {
        this.page +=1;

        const response = await axios.get(`${API_BASE_URL}`, {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        /* общее количество постов приходящих с jsonplaceholder делится на лимит постов с округлением в большую сторону  */
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data]
        this.loading = false
      } catch (e) {
        alert(`Ошибка: ${e}`)
      }
    }
  },
  mounted() {
    this.fetchPosts();
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries, observer) => {
      if(entries[0].isIntersecting && this.page < this.totalPages){
        this.loadMorePosts()
      }
    };
    const observer = new IntersectionObserver(callback, options);

    observer.observe(this.$refs.main__observer)
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((a, b) => a[this.selectedSort]?.localeCompare(b[this.selectedSort]))
    },
    sortedAndSearchedPosts(){
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch:{
    // page(){
    //   this.fetchPosts()
    // }
  }
};
</script>