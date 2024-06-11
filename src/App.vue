<script setup>
  import FormularioItem from './components/formilario-item.vue'
  import useClima from './composable/useClima';

  const {obtenerClima} = useClima()
</script>

<template>
  <h1 class="titulo">Buscador De Climas</h1>
  <div class="contenedor buscador-clima">
    <FormularioItem
    @obtner-clima="obtenerClima"
    />

  </div>
</template>

<style scoped>

</style>
