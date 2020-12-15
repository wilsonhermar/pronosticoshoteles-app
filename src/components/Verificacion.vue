<template>
    <div id= "verificacion">
        <header>
          <h2>{{informacion}}</h2>
        </header>
        <input type="text" name="nombreHotel"/>
        <button v-on:click="created">EJECUTAR</button>
        <p>{{mensaje}}</p>
    </div> 
</template>

<script>
import axios from 'axios'; 
export default {
    name: "verificacion",
    data:function(){
        return{
            informacion : "En este componte se verifica si el hotel existe!",
            mensaje : ""
        }
    },
    methods:{       
    created:function(){
        let nombre_hotel = null
        nombre_hotel = document.getElementsByName("nombreHotel")[0].value
        let self = this
        var post = {
        nombre: nombre_hotel ,
        };
        axios.post("https://pronosticohoteles-api.herokuapp.com/hotel/verification/",post)
        //axios.post("http://127.0.0.1:8000/hotel/verification/",post)
            .then((result) =>{
                self.mensaje = result.data
            })
            .catch((error)=> {
                self.mensaje = "[NO ES POSIBLE LA CONEXION CON EL SERVIDOR]"
            });
        }
    }
}
</script>

<style>
    #verificacion input{
        display:block;
        display: flex;
        padding: 0%;
        margin-left: 45%;
        text-align: center;
    }

    #verificacion button{
        margin-left: 48%;
        margin-top: 20px;
    }

    #verificacion h2{
        text-align:center;
    }

    #verificacion p{
        margin-left: 37%; 
    }
</style>
