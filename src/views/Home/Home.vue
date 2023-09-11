<template>
  <div class="container">
    <div>
      <home-header></home-header>
    </div>
    <div class="input-container">
      <ToDoInput v-model="toDo" />
      <AddButton :toDo="toDo" @resetTodo="resetTodo" />
    </div>
    <ToDoCard />
  </div>
</template>

<script>
import HomeHeader from './HomeHeader.vue';
import ToDoInput from '@/components/ToDoInput.vue';
import AddButton from '@/components/AddButton.vue';
import ToDoCard from '@/components/ToDoCard.vue';

export default {
  components: {
    HomeHeader,
    ToDoInput,
    AddButton,
    ToDoCard,
  },
  data: () => {
    return {
      toDo: ""
    };
  },
  watch: {
    toDo(newVal, oldVal) {
      console.log('toDo changed:', newVal);
    },
  },
  methods: {
    resetTodo() {
      console.log('resetTodo method called'); // 디버깅을 위한 로그
      console.log('Before reset:', this.toDo); // 디버깅을 위한 로그
      this.toDo = '';
      this.$nextTick(() => {
        console.log('After reset:', this.toDo); // 디버깅을 위한 로그
      });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.input-container {
  display: flex;
  align-items: center;
}
</style>
