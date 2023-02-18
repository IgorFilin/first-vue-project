<template>
  <TransitionGroup name="post-list">
    <OnePost class="post-list-item" @deletePost="(id)=>$emit('deletePost', id)"
             v-bind:data="{title:post.title,description:post.body,id:post.id}"
             v-for="post in $props.arrayPost"
             :key="post.id"/>
  </TransitionGroup>
</template>

<script>
import OnePost from "@/components/OnePost";

export default {
  name: "PostsList",
  components: {OnePost},
  props: {
    arrayPost: Array,
  },
  emits:['deletePost'],
  data() {
    return {}
  },
  methods: {}
}

</script>

<style scoped>
.post-list-item {
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.post-list-move {
  transition: transform 0.9s ease;
}
</style>