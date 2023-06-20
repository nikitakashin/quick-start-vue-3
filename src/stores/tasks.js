import { defineStore } from 'pinia';
import { keyBy } from '~/utils/common';

export const useTasks = defineStore('tasks', {
  state: () => ({
    tasks: [
      {
        text: 'Python (МФА: [ˈpʌɪθ(ə)n]; в русском языке встречаются названия пито́н[24] или па́йтон[25]) — высокоуровневый язык программирования общего назначения с динамической строгой типизацией и автоматическим управлением памятью[26][27], ориентированный на повышение производительности разработчика, читаемости кода и его качества, а также на обеспечение переносимости написанных на нём программ[28]. Язык является полностью объектно-ориентированным в том плане, что всё является объектами[',
        id: 1,
        isComplete: false
      },
      {
        text: 'JavaScript (/ˈdʒɑːvɑːˌskrɪpt/; аббр. JS /ˈdʒeɪ.ɛs./) — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript (стандарт ECMA-262[9]).JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам',
        id: 2,
        isComplete: false
      },
      {
        text: 'Основные архитектурные черты: динамическая типизация, слабая типизация, автоматическое управление памятью, прототипное программирование, функции как объекты первого класса. На JavaScript оказали влияние многие языки, при разработке была цель сделать язык похожим на Java. Языком JavaScript не владеет какая-либо компания или организация, что отличает его от ряда языков программирования, используемых в веб-разработке[~ 1][11]. Название «JavaScript» является зарегистрированным товарным знаком корпорации Oracle в США',
        id: 3,
        isComplete: false
      }
    ],
    nextId: 4
  }),

  getters: {
    completeTasks(state) {
      return state.tasks.filter((task) => task.isComplete);
    },

    activeTasks(state) {
      return state.tasks.filter((task) => !task.isComplete);
    },

    taskById(state) {
      return keyBy(state.tasks, 'id');
    }
  },

  actions: {
    addTask(text) {
      this.tasks.push({ text, id: this.nextId++, isComplete: false });
    },

    completeTask(taskId) {
      this.tasks.forEach((task) => {
        if (task.id === taskId) task.isComplete = true;
      });
    },

    deleteTask(taskId) {
      const newTasks = [];

      this.tasks.forEach((task) => {
        if (task.id !== taskId) {
          newTasks.push(task);
        }
      });

      this.tasks = newTasks;
    },

    saveTask(taskId, text) {
      let taskIndex = 0;

      this.tasks.forEach((task, index) => {
        if (task.id.toString() === taskId.toString()) {
          taskIndex = index;
        }
      });

      this.tasks[taskIndex].text = text;
    }
  }
});
