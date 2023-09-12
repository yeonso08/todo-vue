<template>
    <div>
        <div class="card" v-for="(toDo, index) in toDos" :key="toDo.id">
            <div class="text">
                {{ toDo.todo }}
            </div>
            <div class="button">
                <DeleteButton :id="toDo.id" @deleteTodo="deleteTodo" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import DeleteButton from './DeleteButton.vue';

export default {
    components: {
        DeleteButton,
    },
    computed: {
        ...mapState(['toDos'])
    },
    methods: {
        deleteTodo(id) {
            this.$store.dispatch('DELETE_TODO', id);
        }
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
    justify-content: space-between;
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
</style>

