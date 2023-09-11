<template>
    <div>
        <input :value="value" @input="updateValue" />
    </div>
</template>

<script>
export default {
    props: ['value'],
    methods: {
        updateValue(event) {
            this.$emit('input', event.target.value);
        },
    },
};
</script>

<style>
input {
    border: none;
    width: 500px;
    height: 60px;
    border-radius: 10px;
    outline-color: antiquewhite
}
</style>
