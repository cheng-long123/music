import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    musicUrl: ''
  },
  mutations: {
    setMusicUrl (state, musicUrl) {
      state.musicUrl = musicUrl
    }
  },
  actions: {
  },
  modules: {
  }
})
