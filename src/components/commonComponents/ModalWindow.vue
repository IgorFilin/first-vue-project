<template>
<div v-show="show"   class="container" @click="hideHandler">
  <div @click.stop class="modalWindow">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "ModalWindow",
  props:{
    show:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    hideHandler(){
      this.$emit('isShow',false)
    }
  }
}
</script>

<style scoped>
.container{
  position: fixed;
  top:0;
  left:0;
  bottom: 0;
  right: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
}
.modalWindow{
  margin: auto;
  background: white;
  border-radius: 10px;
  min-height: 100px;
  max-width: 300px;
  padding: 20px;
}
</style>