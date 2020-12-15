<template>
    <div id= "buscar">
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
    name: "buscar",
    data:function(){
        return{
            informacion : "En este componte se devuelve toda la informacion del hotel!",
            mensaje : ""
        }
    },
    methods:{ 
        created:function(){
            let self = this
            let nombre_hotel = null
            //let aux = "https://hotel-pronostico.herokuapp.com/hotel/search/{nombre}?name=" --> URL GITHUB
            let aux = "https://pronosticohoteles-api.herokuapp.com/hotel/search/{nombre}?name="
            nombre_hotel = document.getElementsByName("nombreHotel")[0].value
            let url = aux+nombre_hotel
            axios.get(url)
            .then((result) =>{
                self.mensaje = ("El "+result.data.nombre +" Esta ubicado en "+ result.data.ubicacion +
                                " , tiene "+ result.data.estrellas + " estrellas. El numero total de habitaciones son: "+
                                result.data.totalHabitaciones + ". La cantidad de habitaciones sencillas son: "
                                + result.data.sencilla + ", el valor de cada habitacion sencilla es : " + result.data.precioMinSenc 
                                + " . La cantidad de habitaciones dobles son : " + result.data.doble + " , el valor de cada habitacion doble es : "
                                + result.data.precioMinDob + " . La cantidad de habitaciones tripes son : " + result.data.triple 
                                + " , el valor de cada habitacion triple es : " + result.data.precioMinTrip +
                                " . La cantidad de Suits son : " + result.data.suite + " , El costo de cada suit es : " + result.data.precioMinSuite 
                                )
            })
            .catch((error)=> {
                self.mensaje = "[NO ES POSIBLE BUSCAR EL REGISTRO , NO EXISTE EN LA BASE DE DATOS]"
            });
        }
    }
}
</script>

<style>
    #buscar input{
        display:block;
        display: flex;
        padding: 0%;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

    #buscar button{
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

    #buscar button:hover{
        color: #000000;
        background: #85C1E9;
        border: 1px solid #85C1E9;
        cursor: pointer;
    }

    #buscar h2{
        text-align:center;
    }

    #buscar p{
        text-align:center;
        margin-top: 7%;
    }


</style>