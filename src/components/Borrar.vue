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
            let aux = "https://pronosticohoteles-api.herokuapp.com/hotel/delete/"
            //let aux = "http://127.0.0.1:8000/hotel/delete/"
            nombre_hotel = document.getElementsByName("nombreHotel")[0].value
            let url = aux+nombre_hotel
            axios.delete(url)
            .then((result) =>{
                self.mensaje = result.data
            })
            .catch((error)=> {
                self.mensaje = "[NO ES POSIBLE BORRAR EL REGISTRO , NO EXISTE EN LA BASE DE DATOS]"
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
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

    #borrar button{
        color: #E5E7E9;
        background: #3498DB;
        font-size: 12px;
        font-weight:600;
        border: 1px solid #3498DB;
        border-radius: 5px;
        padding: 6px 20px;
        display: block;
        cursor: pointer;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1%;
    }

    #borrar button:hover{
        color: #000000;
        background: #85C1E9;
        border: 1px solid #85C1E9;
        cursor: pointer;
    }

    #borrar h2{
        text-align:center;
    }

    #borrar p{
        text-align:center;
        margin-top: 7%;
    }


</style>