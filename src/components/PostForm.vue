<template>
  <div class="inputGroup">
    <h2>Создание поста</h2>
    <MyInput v-model='title' placeholder="Имя"/>
    <MyInput v-model='description'  placeholder="Описание"/>
    <MyButton @click="createPostHandler">Добавить пост</MyButton>
  </div>
</template>

<script>

import MyInput from "@/components/commonComponents/MyInput";
export default {
  name: "PostForm",
  components: {MyInput},
  data() {
    return {
      title: '',
      description: '',
    }
  },
  methods: {
    createPostHandler() {
      const post = {id: Date.now(), title: this.title, description: this.description}
      this.title = ''
      this.description = ''
      this.$emit('createPost', post)
    }
  }
}
</script>

<style scoped>
.inputGroup {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}



</style>