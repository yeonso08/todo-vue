<template>
    <button @click="handleDelete">X</button>
</template>

<script>
export default {
    props: ['id'],
    methods: {
        handleDelete() {
            this.$emit('deleteTodo', this.id);
        }
    }
}
</script>

<style scoped>
button {
    color: red;
    background-color: white;
    border: none;
}
</style>