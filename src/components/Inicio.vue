<template>
    <div id="inicio">
        <h2> Bienvenido {{mensaje}}</h2>
    </div>    
</template>

<script>
import axios from 'axios'; 
export default {
    name: "inicio",
    data:function(){
        return{
            mensaje : ""
        }
    },
    created:function(){
        let self = this
        //axios.get("https://hotel-pronostico.herokuapp.com/")--> URL GITHUB
        axios.get("https://pronosticoshoteles-app.herokuapp.com/test")
            .then((result) =>{
                self.mensaje = result.data
            })
            .catch((error)=> {
                self.mensaje = "[LA APLICACION NO ESTA CONECTADA]"
            });
    }
}
</script>

<style>
    #inicio{
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    #inicio h2{
        color:blue;
        font-size: 30px;
    }
</style>