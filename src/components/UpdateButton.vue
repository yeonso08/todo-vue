<template>
    <button @click="complettodo">V</button>
</template>
  
<script>
export default {
    props: ['id'],
    methods: {
        complettodo() {
            this.$emit('updateTodo', this.id);
        }
    }
}
</script>

<style scoped>
button {
    border: none;
    background-color: white;
    color: greenyellow;
    font-weight: 800;
    margin-right: 10px;
}
</style>
  