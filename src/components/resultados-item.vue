<script setup>
import useClima from '@/composable/useClima';

    const {covierteGrados}=useClima()

    defineProps({
        clima:{
            type:Object,
            required:true,
            
        }
    })
        
</script>
<template>
    <div class="resultado">
        <h2>Clima de: {{ clima.name }}</h2>
        <p class="actual">{{ covierteGrados(clima.main.temp)  }}<span>&deg;C</span></p>
        <div class="temperaturas">
            <p>Min: <span>{{  covierteGrados(clima.main.temp_min) }} &deg;C</span></p>
            <p>Max: <span>{{  covierteGrados(clima.main.temp_max) }} &deg;C</span></p>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>