<template>
  <div class="task-list">
    <div class="title">{{ props.title }}</div>

    <div v-if="!props.taskList.length" class="empty">Нет ни одной задачи</div>

    <div v-else class="list">
      <task-preview
        v-for="task in props.taskList"
        class="task"
        :task="task"
        :key="task.id"
        @complete="complete"
        @remove="remove"
      />
    </div>
  </div>
</template>

<script setup>
import TaskPreview from './TaskPreview.vue';

const props = defineProps(['taskList', 'title']);

const emit = defineEmits(['complete', 'remove']);

const complete = (evt) => {
  emit('complete', evt);
};

const remove = (evt) => {
  emit('remove', evt);
};
</script>

<style lang="scss" scoped>
.task-list {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: calc($height-task-form + 8px) 24px 36px 24px;
  align-items: center;

  .title {
    width: 100%;
    text-align: left;
    margin-bottom: 24px;
    font-size: 24px;
  }

  .list {
    width: 100%;
    .task {
      margin-bottom: 24px;
    }
  }
}
</style>
