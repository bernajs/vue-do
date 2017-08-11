<template>
<div id="AddTarea">
  <v-layout>
    <v-flex>
      <v-text-field label="Nombre" v-model="nombre"></v-text-field>
    </v-flex>
  </v-layout>
</div>
</template>
<script>
export default {
  name: 'AddTarea',
  data: () => ({nombre: ''})
}
</script>
<style lang="" scoped>
</style>
