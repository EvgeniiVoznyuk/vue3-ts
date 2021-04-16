<template>
  <div class="home">
    <ItemList :items="items" :loading="loading" />
  </div>
</template>

<script lang="ts">
import store from '@/store';
import { defineComponent, computed, onMounted } from 'vue';
import ItemList from '@/components/items/ItemList.vue';
// import { itemInterface } from '@/models/items/item.interface';

export default defineComponent({
  name: 'Home',
  components: {
    ItemList,
  },
  setup() {
    // computeds
    const items = computed(() => store.state.items);
    const loading = computed(() => store.state.loading);

    onMounted(() => store.dispatch('loadItems'));

    return { items, loading };
  },
});
</script>
