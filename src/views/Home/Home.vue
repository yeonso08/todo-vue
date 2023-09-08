<template>
  <div>
    <home-header></home-header>
    <ToDoInputVue />
  </div>
</template>

<script>
import HomeHeader from './HomeHeader.vue';
import ToDoInputVue from '@/components/ToDoInput.vue';
export default {
  components: {
    HomeHeader,
    ToDoInputVue
  }
};
</script>

<style></style>
