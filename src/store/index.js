import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    movies: []
  },
  mutations: {
    setMovies (state, movies) {
      state.movies = movies
    }
  },
  actions: {
    setMovies ({commit}, movies) {
      commit('setMovies', movies)
    },
    async fetchMovies ({dispatch}, q) {
      let movies = await axios.get(`http://www.omdbapi.com/?s=${q}&apikey=409a3997`)
      dispatch('setMovies', movies.data.Search)
    }
  },
  getters: {
    movies: (state) => state.movies
  }
})
