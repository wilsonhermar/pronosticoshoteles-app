<template>
    <div class= 'encabezado'>
      <header>
          <h1>{{titulo}}</h1>
          <nav>
            <button v-on:click="init">INICIO</button>
            <button v-on:click="verificacion">VERIFICACION</button>
            <button v-on:click="buscar">BUSCAR</button>
            <button v-on:click="actualizar">ACTUALIZAR</button>
            <button v-on:click="crear">CREAR</button>
            <button v-on:click="borrar">BORRAR</button>
          </nav>
      </header>
    </div>
</template>


<script>
export default {
    name: 'Encabezado',
    data: function(){
    return{
      titulo : 'APLICATIVO PRONOSTICO DE HOTELES',
      piePagina : 'APLICATIVO PRONOSTICO DE HOTELES',
    }
  },
  methods:{
    init: function(){
      this.$router.push({name:"test"})
    },
    verificacion: function(){
      this.$router.push({name:"verificacion"})
    },
    buscar: function(){
      this.$router.push({name:"buscar"})
    },
    actualizar: function(){
      this.$router.push({name:"actualizar"})
    },
    borrar: function(){
      this.$router.push({name:"borrar"})
    },
    crear: function(){
      this.$router.push({name:"crear"})
    }
  }
    
}
</script>

<style scoped>

.enacbezado{
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
.encabezado h1 {
    font-family: "Homer Simpson UI";
    color: #1900ff;
    border: rgba(255, 0, 0, 0.384) 2px solid;
    margin: 0%;
    background-color: #567895;
    text-align: center;
}

.encabezado nav {
    display: flex;
    align-items: center;
    margin:auto;
    font-size: 20px;
    margin-left: 29%;
}
.encabezado nav button{
    color: #E5E7E9;
    background: #1179e9;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 20px;
    display: inline-block;

}
.encabezado nav button:hover{
    color: #283747;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;

}

</style>