<template>
  <div>
    <h3>Items - loading: {{ loading }}</h3>
    <Loader v-show="loading" />
    <ul v-show="!loading">
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
import Loader from '@/components/shared/Loader.vue';
import Item from './children/Item.vue';

export default defineComponent({
  components: {
    Item,
    Loader,
  },
  props: {
    items: {
      type: Array as PropType<itemInterface[]>,
    },
    loading: {
      type: Boolean,
    },
  },
  emits: ['selectItem'],
  // eslint-disable-next-line vue/no-setup-props-destructure
  setup(props, { emit }) {
    const onItemSelect = (item: itemInterface) => {
      emit('selectItem', item);
    };

    return { onItemSelect };
  },
});
</script>

<style lang="scss">
ul {
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}
</style>
