<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
}
</script>

<style scoped>

.button {
  width: 100px;
  height: 27px;
  padding: 2px;
  background: none;
  color: teal;
  border: 1px solid;
  transition: 1s;
}

.button:hover {
  background: burlywood;
  transition: 1s;
  color: black;
}

.button:active {
  background: blue;
  color: aliceblue;
}
</style>