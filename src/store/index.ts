import { createStore } from 'vuex';
import { ItemsStateInterface } from '@/models/store/ItemsStateInterface';
import { ItemInterface } from '@/models/items/item.interface';
import apiClient from '@/api-client';

const state: ItemsStateInterface = {
  loading: false,
  items: [],
};

export default createStore({
  state,
  mutations: {
    loadingItems(state: ItemsStateInterface) {
      state.loading = true;
      state.items = [];
    },
    loadedItems(state: ItemsStateInterface, items: ItemInterface[]) {
      state.items = items;
      state.loading = false;
    },
  },
  actions: {
    loadItems({ commit, state }) {
      commit('loadingItems');

      setTimeout(() => {
        apiClient
          .items
          .fetchItems()
          .then((data: ItemInterface[]) => commit('loadedItems', data))
      }, 1000);
    },
  },
  modules: {
  },
});
