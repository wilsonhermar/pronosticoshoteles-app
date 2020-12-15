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
        let post = {
        nombre: nombre_hotel ,
        };
        axios.post("https://pronosticohoteles-api.herokuapp.com/hotel/verification/",post)
        //axios.post("http://127.0.0.1:8000/hotel/verification/",post)
            .then((result) =>{
                self.mensaje = result.data
            })
            .catch((error)=> {
                self.mensaje = "[NO ES POSIBLE VERIFICAR EL REGISTRO , NO EXISTE EN LA BASE DE DATOS]"
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
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

    #verificacion button{
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

    #verificacion button:hover{
        color: #000000;
        background: #85C1E9;
        border: 1px solid #85C1E9;
        cursor: pointer;
    }

    #verificacion h2 {
        text-align:center;
    }

    #verificacion p{
        text-align:center;
        margin-top: 7%;
    }
</style>
