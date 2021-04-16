import { createStore } from 'vuex';
import { ItemsStateInterface } from '@/models/store/ItemsStateInterface';
import { ItemInterface } from '@/models/items/item.interface';

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
      const items: ItemInterface[] = [
        {
          id: 1,
          name: 'Item1',
          selected: false,
        },
        {
          id: 2,
          name: 'Item2',
          selected: false,
        },
        {
          id: 3,
          name: 'Item3',
          selected: false,
        },
      ];

      setTimeout(() => commit('loadedItems', items), 1000);
    },
  },
  modules: {
  },
});
