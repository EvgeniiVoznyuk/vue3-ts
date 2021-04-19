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
import { useItemsStore } from '@/store/items';
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
    const ItemsStore = useItemsStore();
    // computeds
    const items = computed(() => ItemsStore.state.items);
    const loading = computed(() => ItemsStore.state.loading);

    onMounted(() => ItemsStore.action(MutationType.items.loadItems));

    const onSelectItem = (item: ItemInterface) => {
      ItemsStore.action(MutationType.items.selectItem, {
        id: item.id,
        selected: !item.selected,
      });
    };

    return { items, loading, onSelectItem };
  },
});
</script>
