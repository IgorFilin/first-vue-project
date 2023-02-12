<template>
  <div class="inputGroup">
    <h2>Создание поста</h2>
    <input v-bind:value="title" @input="onChangeInputGroupHandlerTitle" placeholder="Имя" type="text" class="input">
    <input v-bind:value="description" @input="description = $event.currentTarget.value" placeholder="Описание" type="text" class="input">
    <button @click="createPostHandler" class="buttonAddPost">Добавить пост</button>
  </div>
 <div class="post" v-for="post in arrayPost" v-bind:key="post.id" >
 <div><strong>Название:</strong> {{post.title}}</div>
 <div><strong>Описание:</strong> {{post.description}}</div>
 </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title:'',
      description:'',
       arrayPost:[
           {id:1,title:'JavaScript',description:'Это высокоуровневый, интерпретируемый, динамичный, язык программирования!'},
           {id:1,title:'React',description:'Это JS библиотека с открытым исходным кодом для разработки SPA приложений с декларированных подходом.'},
           {id:1,title:'Vue',description:'JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов'},
           {id:1,title:'TypeScript',description:'Язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript.'},
           {id:1,title:'Angular',description:'Открытая и свободная платформа для разработки веб-приложений, написанная на языке TypeScript'},
           {id:1,title:'Next.js',description:'Это масштабируемые приложения React производственного уровня'}
       ],
    }
  },
  methods: {
    onChangeInputGroupHandlerTitle(e){
      this.title = e.currentTarget.value
    },
    onChangeInputGroupHandlerDescription(e){
      this.description = e.currentTarget.value
    },
    createPostHandler(){
     const newArray = [...this.arrayPost,{id:44,title:this.title,description:this.description}]
      return newArray
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app{
  padding: 20px;
}
.post{
  margin: 5px;
  padding: 5px;
  border: 1px solid black;
}
.inputGroup{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.input{
  max-width: 200px;
  max-height: 30px;
  padding: 5px;
  margin: 2px;
}
.buttonAddPost{
  width: 100px;
  height: 27px;
  padding: 2px;
  background: none;
  color:teal;
  border: 1px solid;
  transition: 1s;
}
.buttonAddPost:hover{
  background: burlywood;
  transition: 1s;
  color: black;
}
.buttonAddPost:active{
  background: blue;
  color: aliceblue;
}
</style>