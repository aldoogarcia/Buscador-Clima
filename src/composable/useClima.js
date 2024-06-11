export default function useClima(){

    const obtenerClima=({ciudad,pais})=>{
        console.log("enviando desde el composables...",ciudad)
        console.log("enviando desde el composables...",pais)
    }

    return{
        obtenerClima
    }
}