import {ref,computed} from 'vue'
import axios from 'axios';

const climaObjt=ref({})
const spiner=ref(false)
const error = ref('')

export default function useClima(){


    const obtenerClima=async ({ciudad,pais})=>{
        spiner.value=true;
        climaObjt.value={}
        error.value=''
        //OBTIENE LLAVE DE API
        const keyApi=import.meta.env.VITE_API_KEY;

        try{
            //CREA LA URL DINAMICA
            //SACADA DE GEOCODIN
            const url=`https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=2&appid=${keyApi}`
            const {data}= await axios(url)
            const {lat, lon }= data[0]
            //OBTIENE EL CLIMA Current Weather Data
            const url2=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${keyApi}`
            const {data:dataClima}=await axios(url2)
            climaObjt.value=dataClima

        }catch(e){
            error.value='Ciudad no encontrada'
        }finally{
            spiner.value=false;
        }
    }

    const muestraResutado=computed(()=>{
        return Object.values(climaObjt.value).length>0
    })

    const covierteGrados=(grados)=>{
        return parseInt(grados-273.15)
    }

    return{
        obtenerClima,
        climaObjt,
        muestraResutado,
        covierteGrados,
        spiner,
        error
    }
}