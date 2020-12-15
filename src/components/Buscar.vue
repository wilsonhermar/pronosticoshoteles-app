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
        margin-left: 46%;
        text-align:center;
    }

    #buscar button{
        margin-left: 49%;
        margin-top: 20px;
    }

    #buscar h2{
        text-align:center;
    }

    #buscar p{
        margin-left: 30%;
        margin-right: 30%;  
    }

</style>