<template>
  <div>
    <h3>Items:</h3>
    <ul>
      <Item
         v-for="item in items"
        :key="item.id"
        @select="onItemSelect(item)"
        :model="item"
      />
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { itemInterface } from '@/models/items/item.interface';
import Item from './children/Item.vue';

export default defineComponent({
  components: {
    Item,
  },
  props: {
    items: {
      type: Array as PropType<itemInterface[]>,
    },
  },
  setup() {
    const onItemSelect = (item: itemInterface) => {
      // eslint-disable-next-line no-param-reassign
      item.selected = !item.selected;
      console.log('onItemSelect', item.id, item.selected);
    };

    return { onItemSelect };
  },
});
</script>
