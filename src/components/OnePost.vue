<template>
  <div><strong>Название:</strong> {{ $props.data.title }}</div>
  <div><strong>Описание:</strong> {{ $props.data.description }}</div>
</template>

<script>
export default {
  name: "OnePost",
  props:{
    data:{
      title:'',
      description: ''
    }

  }
}
</script>

<style scoped>

</style>