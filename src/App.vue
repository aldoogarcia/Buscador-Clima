<script setup>
  import FormularioItem from './components/formilario-item.vue'
  import useClima from './composable/useClima';
  import ResultadosItem from './components/resultados-item.vue'

  const {obtenerClima,climaObjt,muestraResutado} = useClima()
</script>

<template>
  <h1 class="titulo">Buscador De Climas</h1>
  <div class="contenedor buscador-clima">
    <FormularioItem
    @obtner-clima="obtenerClima"
    />
    <ResultadosItem 
    v-if="muestraResutado"
    :clima="climaObjt"
    />

  </div>
</template>

<style scoped>

</style>
