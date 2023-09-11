<template>
    <div>
        <input @input="$emit('input', $event.target.value)" />
    </div>
</template>

<script>
export default {
}
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
