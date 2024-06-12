<script setup>
  import FormularioItem from './components/formilario-item.vue'
  import useClima from './composable/useClima';
  import ResultadosItem from './components/resultados-item.vue'
  import SpinnerItem from './components/spinner-item.vue'
  import AlertaItem from './components/alerta-item.vue';
  const {obtenerClima,climaObjt,muestraResutado,spiner,error} = useClima()
</script>

<template>
  <h1 class="titulo">Buscador De Climas</h1>
  <div class="contenedor buscador-clima">
    <FormularioItem
    @obtner-clima="obtenerClima"
    />
    
    <SpinnerItem
    v-if="spiner"
    />
    
    <ResultadosItem 
    v-if="muestraResutado"
    :clima="climaObjt"
    />
    <AlertaItem>{{ error }}</AlertaItem>

  </div>
</template>

<style scoped>

</style>
