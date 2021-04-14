<template>
  <div class="home">
    <ItemList
      @selectItem="onSelectItem"
      :items="items"
      :loading="loading"
    />
  </div>
</template>

<script lang="ts">
import { store } from '@/store';
import { MutationType, StoreModuleNames } from '@/models/store';
import { defineComponent, computed, onMounted } from 'vue';
import ItemList from '@/components/items/ItemList.vue';
import { itemInterface } from '@/models/items/item.interface';

export default defineComponent({
  name: 'Home',
  components: {
    ItemList,
  },
  setup() {
    // computeds
    const items = computed(() => store.state.itemState.items);
    const loading = computed(() => store.state.itemState.loading);

    // actions
    const onSelectItem = (item: itemInterface) => {
      store.dispatch(`${StoreModuleNames.itemsState}/${MutationType.items.selectItem}`, {
        id: item.id,
        selected: !item.selected,
      });
    };

    onMounted(() => {
      store.dispatch(`${StoreModuleNames.itemsState}/${MutationType.items.loadItems}`);
    });

    return { items, loading, onSelectItem };
  },
});
</script>
