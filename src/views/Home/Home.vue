<template>
  <div class="container">
    <div>
      <home-header></home-header>
    </div>
    <div class="input-container">
      <ToDoInput v-model="toDo" />
      <AddButton :toDo="toDo" />
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
  }
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
