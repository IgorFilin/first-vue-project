<template>
  <div>
    <OnePost @deletePost="(id)=>$emit('deletePost', id)"
             v-bind:data="{title:post.title,description:post.body,id:post.id}"
             v-for="post in $props.arrayPost"
             :key="post.id"/>
  </div>
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
  methods: {}
}

</script>

<style scoped>

</style>