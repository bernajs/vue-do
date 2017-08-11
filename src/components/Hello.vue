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

    <!-- Modal -->
    <v-layout row justify-center>
      <v-dialog v-model="dialog">
        <!-- <v-fab-transition> -->
          <v-btn class="blue" slot="activator">
            <v-icon>add</v-icon>
          </v-btn>
        <!-- </v-fab-transition> -->
        <v-card>
          <v-card-title>
            <span class="headline">Agregar nueva tarea</span>
          </v-card-title>
          <v-card-text>
            <v-text-field label="Nombre" v-model="nombre"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn @click.native="dialog = false">Cerrar</v-btn>
            <v-btn @click="onAdd" @click.native="dialog = false">Guardar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</div>
</template>

<script>
import {
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      nombre: '',
      dialog: true
    }
  },
  computed: {
    ...mapGetters(['tareasTerminadas', 'tareasNoTerminadas'])
  },
  methods: {
    ...mapMutations(['toggleTarea']),
    ...mapActions(['addTarea']),
    onAdd () {
      this.addTarea({
        nombre: this.nombre,
        status: false
      })
    }
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
