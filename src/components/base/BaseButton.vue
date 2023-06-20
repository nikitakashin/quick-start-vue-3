<template>
  <component
    :is="component"
    :class="[
      'base-button',
      {
        square: props.square,
        block: props.block,
        transparent: props.transparent
      }
    ]"
    :to="props.to"
    :href="props.href"
    :disabled="props.disabled"
    @click="handleClick"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  to: String,
  href: String,
  square: Boolean,
  block: Boolean,
  transparent: Boolean,
  disabled: Boolean
});

const handleClick = (evt: MouseEvent) => {
  if (props.disabled) {
    evt.preventDefault();
    evt.stopPropagation();
  }
};

const component = computed(() => {
  if (props.to) return 'router-link';
  if (props.href) return 'a';
  return 'button';
});
</script>

<style lang="scss" scoped>
.base-button {
  display: flex;
  border-radius: 24px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  background: rgb(33, 33, 33);
  align-items: center;
  font-weight: 500;
  justify-content: center;
  color: white;
  text-transform: uppercase;
  user-select: none;
  vertical-align: middle;
  padding: 8px 16px;
  font-size: 24px;

  &:hover {
    background: rgb(70, 70, 70);

    &[disabled] {
      background: gray;
      cursor: auto;
    }
  }

  &.square {
    border-radius: 4px;
  }
  &.block {
    width: 100%;
  }

  &[disabled] {
    background: gray;
  }
}
</style>
