<template>
  <div class="inputGroup">
    <h2>Создание поста</h2>
    <input :value="title" @input="onChangeInputGroupHandlerTitle" placeholder="Имя" type="text" class="input">
    <input :value="description" @input="description = $event.currentTarget.value" placeholder="Описание"
           type="text" class="input">
    <MyButton @click="createPostHandler">Добавить пост</MyButton>
  </div>
</template>

<script>

export default {
  name: "PostForm",
  data() {
    return {
      title: '',
      description: '',
    }
  },
  methods: {
    onChangeInputGroupHandlerTitle(e) {
      this.title = e.currentTarget.value
    },
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
  margin-bottom: 20px;
}

.input {
  max-width: 200px;
  max-height: 30px;
  padding: 5px;
  margin: 2px;
}

</style>