<template>
  <input class="input" :value="modelValue" @input="changeInputHandler">
</template>
<script>
export default {
  name: "MyInput",
  props:{
    modelValue:[String,Number]
  },
  methods:{
    changeInputHandler(e){
      this.$emit('update:modelValue',e.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  padding: 5px;
  margin: 2px;
}
</style>