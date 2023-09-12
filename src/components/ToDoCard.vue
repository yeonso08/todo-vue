<template>
    <div>
        <div class="card" v-for="(toDo, index) in toDos" :key="toDo.id">
            {{ toDo.todo }}
        </div>
    </div>
</template>

<!-- <script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['toDos'])
    },
    data() {
        return {
        }
    },
}
</script> -->

<script>
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
</script>


<style scoped>
.card {
    border: none;
    width: 560px;
    height: 60px;
    border-radius: 10px;
    color: black;
    background-color: white;
    margin-top: 20px;
}
</style>
