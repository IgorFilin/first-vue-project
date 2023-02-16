<template>
  <h2>Создайте свой пост</h2>
  <MyButton @click="()=>isShowHandler(true)">Создать пост</MyButton>
  <MyButton @click="sendPosts">Получить посты</MyButton>
  <ModalWindow :show="isShow" @isShow="isShowHandler">
    <PostForm @createPost="createPost"/>
  </ModalWindow>
  <PostsList v-if="arrayPost.length > 0" @deletePost="deletePost" :arrayPost="arrayPost"/>
  <h1 v-else class="postListEmpty">Список постов пуст</h1>
</template>

<script>
import PostsList from "@/components/PostsList";
import PostForm from "@/components/PostForm";
import ModalWindow from "@/components/commonComponents/ModalWindow";
import axios from "axios";

export default {
  name: "App",
  components: {ModalWindow, PostForm, PostsList},
  data() {
    return {
      arrayPost: [],
      isShow: false
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
    async sendPosts() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      this.arrayPost = response.data
    }
  }
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