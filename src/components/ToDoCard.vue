<template>
    <div>
        <div class="card" v-for="(toDo, index) in toDos" :key="toDo.id">
            <div :class="['text', { 'line-text': toDo.isCompleted }]">
                {{ toDo.todo }}
            </div>
            <div class="button">
                <UpdateButton :id="toDo.id" @updateTodo="updateTodo" />
                <DeleteButton :id="toDo.id" @deleteTodo="deleteTodo" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import DeleteButton from './DeleteButton.vue';
import UpdateButton from './UpdateButton.vue';

export default {
    components: {
        DeleteButton,
        UpdateButton,
    },
    computed: {
        ...mapState(['toDos'])
    },
    methods: {
        deleteTodo(id) {
            this.$store.dispatch('DELETE_TODO', id);
        },
        updateTodo(id) {
            this.$store.dispatch('COMPLET_TODO', id);
        },
    }
}
</script>

<!--API 연결 헀을 때-->
<!-- <script>
import { ToDoAPI } from '@/api';
import axios from 'axios';

export default {
    data() {
        return {
            toDos: [],
        };
    },
    async mounted() {
        try {
            const response = await ToDoAPI.getToDos();
            this.toDos = response.data.todos;
            console.log(this.toDos)
        } catch (error) {
            console.error('There was an error fetching the toDos:', error);
        }
    },
};
</script> -->


<style scoped>
.card {
    display: flex;
    align-items: center;
    border: none;
    width: 560px;
    height: 60px;
    border-radius: 10px;
    color: black;
    background-color: white;
    margin-top: 20px;
}

.text {
    flex: 1;
    text-align: center;
}

.button {
    margin-right: 10px;
}

.line-text {
    text-decoration: line-through;
}
</style>

