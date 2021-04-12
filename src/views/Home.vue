<template>
  <div class="home">
    <ItemList :items="items" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ItemList from '@/components/items/ItemList.vue';
import { itemInterface } from '@/models/items/item.interface';

export default defineComponent({
  name: 'Home',
  components: {
    ItemList,
  },
  setup() {
    const items: itemInterface[] = [
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
    return { items };
  },
});
</script>
