<template>
  <PostForm @createPost="createPost"/>
  <PostsList v-if="arrayPost.length > 0" @deletePost="deletePost" :arrayPost="arrayPost"/>
  <h1 v-else class="postListEmpty">Список постов пуст</h1>
</template>

<script>
import PostsList from "@/components/PostsList";
import PostForm from "@/components/PostForm";

export default {
  name: "App",
  components: {PostForm, PostsList},
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
    }
  },
  methods: {
    createPost(post) {
      this.arrayPost.push(post)
    },
    deletePost(id){
      this.arrayPost  = this.arrayPost.filter(el => el.id !== id)

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
.postListEmpty{
  text-align: center;
  color: red;
}

</style>