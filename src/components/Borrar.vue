<template>
    <div id= "borrar">
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
    name: "borrar",
    data:function(){
        return{
            informacion : "En este componte se borra toda la informacion de un  hotel!",
            mensaje : ""
        }
    }, 
    methods:{ 
        created:function(){
            let self = this
            let nombre_hotel = null
            //let aux = "https://hotel-pronostico.herokuapp.com/hotel/delete/"-->URL GITHUB
            let aux = "http://127.0.0.1:8000/hotel/delete/"
            nombre_hotel = document.getElementsByName("nombreHotel")[0].value
            let url = aux+nombre_hotel
            axios.delete(url)
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
    #borrar input{
        display:block;
        display: flex;
        padding: 0%;
        margin-left: 45%;
        text-align:center;
    }

    #borrar button{
        margin-left: 47%;
        margin-top: 20px;
    }

    #borrar p{
        margin-left: 32%; 
    }

    #borrar h2{
        text-align:center;
    }


</style>