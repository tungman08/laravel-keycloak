import Vue from 'vue';
import Vuex from "vuex";
import foodModule from "./food.module";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    food: foodModule,
  }
});

export default store;