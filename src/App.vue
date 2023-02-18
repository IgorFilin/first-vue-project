<template>
  <h2>Создайте свой пост</h2>
  <MyInput placeholder="Поиск..." v-model="searchTitle" />
  <MyButton @click="() => isShowHandler(true)">Создать пост</MyButton>
  <MySelect v-model="option" :options="options"/>
  <ModalWindow :show="isShow" @isShow="isShowHandler">
    <PostForm @createPost="createPost"/>
  </ModalWindow>
  <PostsList v-if="arrayPost.length > 0 && !isPostLoading" @deletePost="deletePost" :arrayPost="searchOnTitle"/>
  <h1 v-else-if="arrayPost.length === 0 && !isPostLoading" class="postListEmpty">Список постов пуст</h1>
  <h1 v-else-if="isPostLoading">...Посты загружаются</h1>
</template>

<script>
import PostsList from "@/components/PostsList";
import PostForm from "@/components/PostForm";
import axios from "axios";
import MyInput from "@/components/commonComponents/MyInput";

export default {
  name: "App",
  components: {MyInput, PostForm, PostsList},
  data() {
    return {
      arrayPost: [],
      isShow: false,
      isPostLoading: false,
      option: '',
      searchTitle:'',
      options: [{title: 'По имени',value:'title'}, {title: 'По описанию',value:'body'}]
    }
  },
  methods: {
    createPost(post) {
      if (post.title !== '' && post.body !== '') {
        this.arrayPost.push(post)
        this.isShow = false
      }
    },
    deletePost(id) {
      this.arrayPost = this.arrayPost.filter(el => el.id !== id)
    },
    isShowHandler(value) {
      this.isShow = value
    },

  },
  mounted() {
    this.isPostLoading = true
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
          this.arrayPost = res.data
          this.isPostLoading = false
        })
        .catch(err => console.warn(err))
  },
  computed :{
    sortArray(){
     return [...this.arrayPost].sort((a, b) => a[this.option]?.localeCompare(b[this.option]))
    },
    searchOnTitle(){
      const array = this.sortArray
      return array.filter(el => el.title.toLowerCase().includes(this.searchTitle.toLowerCase()))
    }
  }
  // watch: {
  //   option(newValue) {
  //       this.arrayPost = this.arrayPost.sort((a, b) => a[newValue].localeCompare(b[newValue]))
  //   }
  // }

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.postListEmpty {
  text-align: center;
  color: red;
}

</style>