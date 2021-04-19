import { createStore, StoreOptions } from 'vuex'
import {
  RootStateInterface,
  RootStoreInterface,
  RootStoreModel
} from '@/models/store'
import { initialRootState } from './initialState'
import { itemsState } from '@/store/items'

const storeOptions: StoreOptions<RootStateInterface> = {
  state: initialRootState,
  modules: {
    itemsState
    // Новые дополнительные модули добавляйте сюда, по аналогии с itemsState.
  }
}

export const store: RootStoreModel<RootStateInterface> = <any>createStore(storeOptions)