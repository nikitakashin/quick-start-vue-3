<template>
  <div
    :class="['task-preview', { complete: props.task.isComplete }]"
    @click="$router.push(`/task?id=${props.task.id}`)"
  >
    <div class="task-text">
      {{ text }}
    </div>

    <div v-if="!props.task.isComplete" class="action-button" @click="complete">
      <base-icon :icon="mdiCheck" :size="24" />
    </div>

    <div class="action-button delete" @click="remove">
      <base-icon :icon="mdiTrashCan" :size="24" />
    </div>
  </div>
</template>

<script setup>
import { mdiCheck, mdiTrashCan } from '@mdi/js';
import BaseIcon from '../base/BaseIcon.vue';
import { textFragment } from '~/utils/common';
import { computed } from 'vue';

const props = defineProps(['task']);

const emit = defineEmits(['complete', 'remove']);

const text = computed(() => {
  return textFragment(props.task.text, 50);
});

const complete = (evt) => {
  evt.stopPropagation();
  emit('complete', props.task.id);
};

const remove = (evt) => {
  evt.stopPropagation();
  emit('remove', props.task.id);
};
</script>

<style lang="scss" scoped>
.task-preview {
  position: relative;
  display: grid;
  width: 100%;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 50px 50px;
  grid-template-areas: 'text complete delete';
  box-shadow: $shadow-3;
  padding: 16px;
  transition: 0.3s box-shadow;
  justify-items: center;

  .task-text {
    grid-area: text;
  }

  &.complete {
    grid-template-areas: 'text text delete';
    .task-text {
      text-decoration: line-through;
    }
  }

  &:hover {
    cursor: pointer;
    box-shadow: $shadow-4;
  }

  .action-button {
    position: relative;
    display: grid;
    justify-content: center;
    align-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: $shadow-3;
    grid-area: complete;
    transition: 0.3s background;

    &:hover {
      background: rgb(142, 246, 142);
    }

    &.delete {
      grid-area: delete;

      &:hover {
        background: rgb(246, 142, 142);
      }
    }
  }
}
</style>
