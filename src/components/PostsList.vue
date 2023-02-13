<template>
  <div class="post" v-for="post in $props.arrayPost" :key="post.id">
    <OnePost v-bind:data="{title:post.title,description:post.description}"/>
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
.post {
  margin: 5px;
  padding: 5px;
  border: 1px solid black;
}
</style>