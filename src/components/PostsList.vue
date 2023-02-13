<template>
  <OnePost @deletePost="deletePost" v-bind:data="{title:post.title,description:post.description,id:post.id}"
           v-for="post in $props.arrayPost"
           :key="post.id"/>
</template>

<script>
import OnePost from "@/components/OnePost";

export default {
  name: "PostsList",
  components: {OnePost},
  props: {
    arrayPost: Array,
  },
  data() {
    return {}
  },
  methods: {
    deletePost(id) {
      this.$emit('deletePost', id)
    }
  }
}

</script>

<style scoped>

</style>