<template>
  <div class="containerPost">
    <div class="post">
      <div><strong>Название:</strong> {{ $props.data.title }}</div>
      <div><strong>Описание:</strong> {{ $props.data.description }}</div>
    </div>
    <button class="button" @click="deletePostHandler($props.data.id)">X</button>
  </div>
</template>

<script>
export default {
  name: "OnePost",
  props: {
    data: {
      type: Object,
      required: true,
      title: '',
      description: '',
      id:0,
    }

  },
  methods:{
    deletePostHandler(id){
      this.$emit('deletePost',id)
    }
  }
}
</script>

<style scoped>
.containerPost{
  display: flex;
  align-items: center;
}
.post {
  max-width: 50%;
  margin: 5px;
  padding: 5px;
  border: 1px solid black;
}
.button{
  width: 40px;
  height: 40px;
}
</style>