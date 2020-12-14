<template>
  <div id="app">
    <img src="./assets/logo_test.png" alt="" width="5%" height="5%" />
    <Encabezado></Encabezado>
    <div class ="main-component">
      <router-view></router-view>
    </div>
    <div class ="footer">
      <h2>{{piePagina}}</h2>
    </div>
  </div>
</template>

<script>
import Encabezado from "./components/Encabezado";
export default {
  name: 'App',
  components: {Encabezado},
    data: function(){
      return{
        piePagina : 'APLICATIVO PRONOSTICO DE HOTELES',
      }
    }
}
</script>

<style>
#body {
  margin-top: 0 0 0 0;
}

.main-component{
    height: 60vh;
    margin: 0%;
    padding: 0%;
    background: #FDFEFE;
}

.footer{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 15vh;
    background-color: #283747;
    color: #E5E7E9;
}

.footer h2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

img{
display:block;
margin:auto;
}

</style>
