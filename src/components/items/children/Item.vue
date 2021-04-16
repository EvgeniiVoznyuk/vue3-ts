<template>
  <li :class="cssClass" @click="onClick">
    <div class="selected-indicator">*</div>
    <div class="name">{{ model.name }}</div>
  </li>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import { ItemInterface } from '@/models/items/item.interface';

export default defineComponent({
  props: {
    model: {
      type: Object as PropType<ItemInterface>,
    },
  },
  emits: ['select'],
  setup(props, { emit }) {
    const cssClass = computed(() => {
      let css = 'item';
      if (props.model?.selected) {
        css += ' selected';
      }
      return css.trim();
    });

    const onClick = () => {
      emit('select', props.model);
    };

    return {
      cssClass,
      onClick,
    };
  },
});
</script>

<style lang="scss" scoped>
li.item {
  padding: 10px;
  outline: solid 1px #eee;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  .selected-indicator {
    font-size: 3em;
    line-height: 0.5em;
    color: lightgray;
  }
  &.selected {
    .selected-indicator {
      color: skyblue;
    }
  }
  &:hover {
    background-color: #eee;
  }
}
</style>
