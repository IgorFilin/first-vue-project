<template>
  <select  class="select" @change="onChangeHandler">
    <option disabled selected hidden>Введите способ сортировки</option>
    <option v-for="(option,i) in options" :key="i" :value="option.value">{{option.title}}</option>
  </select>
</template>
<script>
export default {
  name: "MySelect",
  props:{
    modelValue:String,
    options:Array
  },
  methods:{
    onChangeHandler(event){
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.select{
  border: 2px solid black;
  padding: 5px;
}
</style>