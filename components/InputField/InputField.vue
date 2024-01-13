<template>
  <input
    type="text"
    class="border-2 border-gray-300 bg-white text-gray-700 rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
    :placeholder="props.placeholder"
    required
  />
</template>

<script setup>
const props = defineProps(["placeholder"]);
</script>

<style>
input:focus:invalid {
  border-color: red;
  box-shadow: 0 0 0 1px red; /* Optional: adds a red shadow for better visibility */
}
</style>
