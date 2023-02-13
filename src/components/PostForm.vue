<template>
  <div class="inputGroup">
    <h2>Создание поста</h2>
    <input :value="title" @input="onChangeInputGroupHandlerTitle" placeholder="Имя" type="text" class="input">
    <input :value="description" @input="description = $event.currentTarget.value" placeholder="Описание"
           type="text" class="input">
    <button @click="createPostHandler" class="buttonAddPost">Добавить пост</button>
  </div>
</template>

<script>
export default {
  name: "PostForm",
  data(){
    return {
      title:'',
      description:'',
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

.buttonAddPost {
  width: 100px;
  height: 27px;
  padding: 2px;
  background: none;
  color: teal;
  border: 1px solid;
  transition: 1s;
}

.buttonAddPost:hover {
  background: burlywood;
  transition: 1s;
  color: black;
}

.buttonAddPost:active {
  background: blue;
  color: aliceblue;
}
</style>