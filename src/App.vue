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
      arrayPost: [
        {
          id: 1,
          title: 'JavaScript',
          description: 'Это высокоуровневый, интерпретируемый, динамичный, язык программирования!'
        },
        {
          id: 2,
          title: 'React',
          description: 'Это JS библиотека с открытым исходным кодом для разработки SPA приложений с декларированных подходом.'
        },
        {
          id: 3,
          title: 'Vue',
          description: 'JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов'
        },
        {
          id: 4,
          title: 'TypeScript',
          description: 'Язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript.'
        },
        {
          id: 5,
          title: 'Angular',
          description: 'Открытая и свободная платформа для разработки веб-приложений, написанная на языке TypeScript'
        },
        {id: 6, title: 'Next.js', description: 'Это масштабируемые приложения React производственного уровня'}
      ],
      isShow: false
    }
  },
  methods: {
    createPost(post) {
      if (post.title !== '' && post.description !== '') {
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
      const response = axios.get('https://jsonplaceholder.typicode.com/posts')
      console.log(response)
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