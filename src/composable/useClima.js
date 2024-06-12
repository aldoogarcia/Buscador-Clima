import {ref,computed} from 'vue'
import axios from 'axios';

const climaObjt=ref({})

export default function useClima(){


    const obtenerClima=async ({ciudad,pais})=>{
        //OBTIENE LLAVE DE API
        const keyApi=import.meta.env.VITE_API_KEY;

        //CREA LA URL DINAMICA
        //SACADA DE GEOCODIN
        const url=`http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=2&appid=${keyApi}`
        const {data}= await axios(url)
        const {lat, lon }= data[0]
        console.log(lat)
        console.log(lon)
        //OBTIENE EL CLIMA Current Weather Data
        const url2=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${keyApi}`
        const {data:dataClima}=await axios(url2)
        climaObjt.value=dataClima
    }

    const muestraResutado=computed(()=>{
        return Object.values(climaObjt.value).length>0
    })

    return{
        obtenerClima,
        climaObjt,
        muestraResutado,

    }
}