import Vue from 'vue'
import Vuex from 'vuex'
import {GET_NAMES, SET_NAMES, ADD_NAME, CLEAR_NAME} from "./config/StoreType"
import { isExist, isExistOrThrow } from './util/util';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    names: []
  },
  mutations: {
    [SET_NAMES] (state, payload) {
      state.names = payload.names;
    },
    [ADD_NAME] (state, payload) {
      state.names.push(payload.name);
    }
  },
  actions: {
    async [GET_NAMES] (context) {
      const names = localStorage.getItem("names");
      try {
        context.commit(SET_NAMES, {names: isExist(names) ? JSON.parse(names) : []})
      } catch (e) {
        console.error("ACTIONS > GET_NAMES > Error : ", e);
        context.commit(SET_NAMES, {names: []})
      }
      return context.state.names;
    },
    async [ADD_NAME] (context, payload) {
      const name = payload.name;
      isExistOrThrow(name);
      const names = await context.dispatch(GET_NAMES);
      names.push(name);
      localStorage.setItem("names", JSON.stringify(names));
      context.commit(ADD_NAME, {name: name});
    },
    async [CLEAR_NAME] (context) {
      context.commit(SET_NAMES, {names: []});
      localStorage.removeItem("names");
    }
  },
  getters: {
    names: state => state.names
  }
})
