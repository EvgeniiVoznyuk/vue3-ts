<template>
  <div class="home">
    <ItemList
      :items="items"
      :loading="loading"
      @selectItem="onSelectItem"
    />
  </div>
</template>

<script lang="ts">
import { store } from '@/store';
import { defineComponent, computed, onMounted } from 'vue';
import ItemList from '@/components/items/ItemList.vue';
import { MutationType, StoreModuleNames } from '@/models/store';
import { ItemInterface } from '@/models/items/item.interface';

export default defineComponent({
  name: 'Home',
  components: {
    ItemList,
  },
  setup() {
    // computeds
    const items = computed(() => store.state.itemsState.items);
    const loading = computed(() => store.state.itemsState.loading);

    onMounted(() => store.dispatch(`${StoreModuleNames.itemsState}/${MutationType.items.loadItems}`));

    const onSelectItem = (item: ItemInterface) => {
      store.dispatch(`${StoreModuleNames.itemsState}/${MutationType.items.selectItem}`, {
        id: item.id,
        selected: !item.selected,
      });
    };

    return { items, loading, onSelectItem };
  },
});
</script>
