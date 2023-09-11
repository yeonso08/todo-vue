<template>
    <button @click="addTodo()">+</button>
</template>

<script>
import setToDos from '@/api';
import { mapActions } from 'vuex';

export default {
    props: ["toDo"],
    // methods: {
    //     ...mapActions(['ADD_TODO']),
    //     addTodo() {
    //         if (this.toDo) {
    //             this.ADD_TODO({ content: this.toDo });
    //         }
    //     },
    // },
    methods: {
        async addTodo() {
            console.log(this.toDo)
            const toDoData = {
                id: 151,
                todo: this.toDo,
                completed: false,
                userId: 5
            }
            const { data } = await setToDos(toDoData);
            console.log(data);
        },
    }
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