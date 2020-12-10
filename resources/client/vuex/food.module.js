import FoodService from '@/services/food.service';
const foodService = new FoodService();

export default {
  namespaced: true,
  state: {
    foods: []
  },
  mutations: {
    FETCH_FOOD: (state, foods) => {
      state.foods = foods;
    },
    ADD_FOOD: (state, food) => {
      state.foods.push(food);
    },
    EDIT_FOOD: (state, food) => {
      state.foods[food.index] = food;
    },
    REMOVE_FOOD: (state, index) => {
      state.foods.splice(index, 1);
    }
  },
  actions: {
    async fetch({ commit }) {
      const foods = await foodService.fetch();
      commit('FETCH_FOOD', foods);
    },
    async add({ commit }, payload) {
      const food = await foodService.add(payload);
      commit('ADD_FOOD', food);
    },
    async edit({ commit }, payload) {
      const food = await foodService.edit(payload);
      commit('EDIT_FOOD', food);
    },
    async remove({ commit }, payload) {
      await foodService.remove(payload.id);
      commit('REMOVE_FOOD', payload.index);
    }
  },
  getters: {
    foods: (state) => state.foods
  }
}
