<script setup>
import AlertaItem from "./alerta-item.vue"

import { reactive, ref } from 'vue';

    const emit = defineEmits(['obtner-clima'])
    const formulario = reactive({
        ciudad: '',
        pais: ''
    })
    const paises = [
    { codigo: 'US', nombre: 'Estados Unidos' },
    { codigo: 'MX', nombre: 'México' },
    { codigo: 'AR', nombre: 'Argentina' },
    { codigo: 'CO', nombre: 'Colombia' },
    { codigo: 'CR', nombre: 'Costa Rica' },
    { codigo: 'ES', nombre: 'España' },
    { codigo: 'PE', nombre: 'Perú' }
]

const error=ref("")

const validaFormulario=()=>{
    if(Object.values(formulario).includes('')){
        error.value="Todos los campos son obligatorios"
        setTimeout(()=>{
            error.value=""
        },4000)
        return 
    }
    error.value=""
    emit('obtner-clima',formulario)
}
</script>
<template>
    <form @submit.prevent="validaFormulario" class="formulario">
        <AlertaItem>
            {{ error }}
        </AlertaItem>

        <div class="campo">
            <label for="ciudad">Ciudad</label>
            <input 
            v-model="formulario.ciudad"
            type="text" id="ciudad" placeholder="Ingresa la ciudad">
        </div>
        <div class="campo">
            <label for="pais">Pais</label>
            <select v-model="formulario.pais"  name="" id="pais">
                <option value="" >-- Selecciona --</option>
                <option
                v-for="pais in paises" :key="pais.codigo"
                :value="pais.codigo">{{ pais.nombre }}</option>
            </select>
        </div>

        <input type="submit">
    </form>

</template>