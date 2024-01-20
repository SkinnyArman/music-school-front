<template>
  <button
    class="flex justify-center items-center bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded w-24 h-7 disabled:bg-red-300"
    @click="emit('click', student)"
    :disabled="loading"
  >
    <SpinnerSVG v-if="loading" />
    <slot v-else />
  </button>
</template>

<script setup>
const emit = defineEmits(["click"]);
const props = defineProps(["loading"]);
</script>

<style></style>
