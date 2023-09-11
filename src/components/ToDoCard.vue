<template>
    <div>
        <div class="card" v-for="(toDo, index) in toDos" :key="toDo.id">
            {{ toDo.content }}
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['toDos'])
    },
    data() {
        return {
            // other data properties
        }
    },
}
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
