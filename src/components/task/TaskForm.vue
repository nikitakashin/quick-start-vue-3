<template>
  <div class="task-form">
    <input v-model="text" type="text" class="text" placeholder="Покормить кота..." />
    <base-button class="submit-button" square :disabled="!text.length" @click="handleClick">
      Добавить
    </base-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BaseButton from '~/components/base/BaseButton.vue';

const text = ref('');

const emit = defineEmits(['add']);

const handleClick = () => {
  emit('add', text.value);
  text.value = '';
};
</script>

<style lang="scss" scoped>
.task-form {
  position: relative;
  display: flex;
  width: 100%;
  height: $height-task-form;
  border-radius: 4px;
  box-shadow: $shadow-2;
  padding: 0 6px 0 12px;
  align-items: center;

  .text {
    width: 100%;
    height: 100%;
    border: none;
    background: rgba($color: #000000, $alpha: 0);

    &:focus {
      outline: none;
    }
  }

  .submit-button {
    height: 34px;
  }
}
</style>
