<template>
    <button @click="addTodo()">+</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: ["toDo"],
    methods: {
        ...mapActions(['ADD_TODO']),
        addTodo() {
            if (this.toDo) {
                this.ADD_TODO({ content: this.toDo });
            }
        },
    },
};
</script>

<style>
button {
    background-color: aquamarine;
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 10px;
}
</style>