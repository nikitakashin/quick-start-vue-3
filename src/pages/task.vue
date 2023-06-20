<template>
  <div class="page-task">
    <div class="container">
      <div v-if="taskId" class="task-edit-form">
        <div class="title">Редактирование задачи #{{ taskId }}</div>

        <textarea v-model="text" class="text-input"></textarea>

        <base-button class="submit-button" square block :disabled="text === oldText" @click="save">
          Сохранить
        </base-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTasks } from '~/stores/tasks';
import BaseButton from '@/components/base/BaseButton.vue';

const route = useRoute();
const router = useRouter();
const taskStore = useTasks();

const taskId = ref(null);
const text = ref('');
let oldText = '';

const save = () => {
  taskStore.saveTask(taskId.value, text.value);
  router.push('/');
};

onMounted(() => {
  taskId.value = route.query.id;
  text.value = taskStore.taskById[taskId.value].text;
  oldText = text.value;
});
</script>

<style lang="scss" scoped>
.page-task {
  display: flex;
  min-height: $height-view;
  justify-content: center;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    width: 100%;
    padding: 16px;

    .task-edit-form {
      .title {
        font-size: 24px;
      }

      .text-input {
        margin-top: 16px;
        width: 100%;
        height: 200px;
        border: none;
        background: rgba($color: #000000, $alpha: 0);
        resize: none;
        font-size: 12px;
        box-shadow: $shadow-5;
        padding: 8px;
        border: 1px solid $color-border;

        &:focus {
          outline: none;
        }
      }

      .submit-button {
        margin-top: 16px;
      }
    }
  }
}
</style>
