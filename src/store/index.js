import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nombre: 'Luis Garcia',
    tareas: [{nombre: 'Hacer un ejemplo de todo', status: false},
    {nombre: 'Hacer una todo en ruby', status: false},
    {nombre: 'Hacer una todo en node', status: false},
    {nombre: 'Hacer una todo en php', status: false}]
  },
  getters: {
    tareasTerminadas: (state) => { return state.tareas.filter((tarea) => tarea.status) },
    tareasNoTerminadas: (state) => { return state.tareas.filter((tarea) => !tarea.status) }
  },
  mutations: {
    toggleTarea (state, tarea) { tarea.status = !tarea.status },
    addTarea (state, tarea) { state.tareas.push(tarea) }
  },
  actions: {
    addTarea ({commit}, tarea) { commit('addTarea', tarea) }
  }
})
