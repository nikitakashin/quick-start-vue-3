<template>
  <div class="page-index">
    <div class="container">
      <task-form class="task-form" @add="onAdd" />

      <task-list
        title="Активные"
        :task-list="taskStore.activeTasks"
        @complete="onComplete"
        @remove="onRemove"
      />

      <task-list title="Выполненые" :task-list="taskStore.completeTasks" @remove="onRemove" />
    </div>
  </div>
</template>

<script setup>
import TaskForm from '~/components/task/TaskForm.vue';
import TaskList from '~/components/task/TaskList.vue';
import { useTasks } from '@/stores/tasks';

const taskStore = useTasks();

const onAdd = (evt) => {
  taskStore.addTask(evt);
};

const onComplete = (evt) => {
  taskStore.completeTask(evt);
};

const onRemove = (evt) => {
  taskStore.deleteTask(evt);
};
</script>

<style lang="scss" scoped>
.page-index {
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

    .task-form {
      margin-top: 12px;
    }
  }
}
</style>
