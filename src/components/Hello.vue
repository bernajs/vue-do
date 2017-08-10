<template>
<div class="hello">
  <v-container fluid>
    <v-layout row>
      <v-flex teal class="elevation-5">
        <v-card-text>
          <h2 class="text-xs-center">Todo App</h2></v-card-text>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-list>
          <v-subheader>Terminadas</v-subheader>
          <v-list-tile avatar v-for="tarea in tareasTerminadas" :key="tarea.key" @click="toggleTarea(tarea)">
            <v-list-tile-action>
              <v-icon>done</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{tarea.nombre}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-list>
          <v-subheader>No terminadas</v-subheader>
          <v-list-tile avatar v-for="tarea in tareasNoTerminadas" :key="tarea.key" @click="toggleTarea(tarea)">
            <v-list-tile-action>
              <v-icon>pause</v-icon>
            </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{tarea.nombre}}</v-list-tile-title>
              </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters(['tareasTerminadas', 'tareasNoTerminadas'])
  },
  methods: {
    ...mapMutations(['toggleTarea'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cw {
  color: white;
}

.container {
  padding: 0px;
}
</style>
