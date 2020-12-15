<template>
    <div id= "actualizar">
        <header>
          <h2>{{informacion}}</h2>
        </header>
        <input type="text" name="nombreHotel" value="Nombre Hotel"/>
        <input type="text" name="ubicacionHotel" value="Ubicacion"/>
        <input type="text" name="estrellasHotel" value="Estrellas"/>
        <input type="text" name="totalHabitacionesHotel" value="Total Habitaciones"/>
        <input type="text" name="sencillaHotel" value="Cantidad Habitaciones Sencillas"/>
        <input type="text" name="precioMinSencHotel" value="Valor Habitacion sencilla"/>
        <input type="text" name="dobleHotel" value="Cantidad Habitaciones Dobles"/>
        <input type="text" name="precioMinDobHotel" value="Valor Habitacion Doble"/>
        <input type="text" name="tripleHotel" value="Cantidad Habitaciones Tripes"/>
        <input type="text" name="precioMinTripHotel" value="Valor Habitacion Triple"/>
        <input type="text" name="suiteHotel" value="Cantidad de Suites"/>
        <input type="text" name="precioMinSuiteHotel" value="Valor Habitacion suit"/>

        <button v-on:click="created">EJECUTAR</button>
        <p>{{mensaje}}</p>
    </div>   
</template>

<script>
import axios from 'axios'; 
export default {
    name: "actualizar",
    data:function(){
        return{
            informacion : "En este componte se puede acualizar la informacion de un hotel!",
            mensaje:""
        }
    },
    methods:{       
    created:function(){
        let nombre_hotel = null
        let ubicacion_Hotel = null
        let estrellas_Hotel = null
        let totalHabitaciones_Hotel = null
        let sencilla_Hotel = null
        let precioMinSenc_Hotel = null
        let doble_Hotel = null
        let precioMinDob_Hotel = null
        let triple_Hotel = null
        let precioMinTrip_Hotel = null
        let suite_Hotel = null
        let precioMinSuite_Hotel = null

        nombre_hotel = document.getElementsByName("nombreHotel")[0].value
        ubicacion_Hotel = document.getElementsByName("ubicacionHotel")[0].value
        estrellas_Hotel = document.getElementsByName("estrellasHotel")[0].value
        totalHabitaciones_Hotel = document.getElementsByName("totalHabitacionesHotel")[0].value
        sencilla_Hotel = document.getElementsByName("sencillaHotel")[0].value
        precioMinSenc_Hotel = document.getElementsByName("precioMinSencHotel")[0].value
        doble_Hotel = document.getElementsByName("dobleHotel")[0].value
        precioMinDob_Hotel = document.getElementsByName("precioMinDobHotel")[0].value
        triple_Hotel = document.getElementsByName("tripleHotel")[0].value
        precioMinTrip_Hotel = document.getElementsByName("precioMinTripHotel")[0].value
        suite_Hotel = document.getElementsByName("suiteHotel")[0].value
        precioMinSuite_Hotel = document.getElementsByName("precioMinSuiteHotel")[0].value




        let self = this
        let post = {
            nombre: nombre_hotel,
            ubicacion: ubicacion_Hotel,
            estrellas: estrellas_Hotel,
            totalHabitaciones: totalHabitaciones_Hotel,
            sencilla: sencilla_Hotel,
            precioMinSenc: precioMinSenc_Hotel,
            doble: doble_Hotel,
            precioMinDob: precioMinDob_Hotel,
            triple: triple_Hotel,
            precioMinTrip: precioMinTrip_Hotel,
            suite: suite_Hotel,
            precioMinSuite: precioMinSuite_Hotel,
        };
        axios.put("https://pronosticohoteles-api.herokuapp.com/hotel/update/",post)
        //axios.put("http://127.0.0.1:8000/hotel/update/",post)
            .then((result) =>{
                self.mensaje = result.data
            })
            .catch((error)=> {
                self.mensaje = "[NO ES POSIBLE ACTUALIZAR EL REGISTRO , NO EXISTE EN LA BASE DE DATOS]"
            });
        }
    }
}
</script>
    
<style>
    #actualizar input{
        display:block;
        display: flex;
        padding: 0%;
        margin-left: 46%;
        text-align:center;
    }

    #actualizar button{
        margin-left: 48%;
        margin-top: 20px;
    }

    #actualizar h2{
        text-align:center;
    }

    #actualizar p{
        margin-left: 32%; 
    }

</style>