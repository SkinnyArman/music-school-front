<template>
  <div class="my-5 mx-auto">
    <button
      class="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mb-2"
      @click="isAddStudentOpen = true"
    >
      ثبت نام کردن هنرآموز
    </button>
    <div
      v-if="isAddStudentOpen"
      class="flex flex-wrap gap-x-4 rounded border border-gray-200 dark:border-gray-700 p-4 mb-4"
    >
      <div>
        <span> نام: </span>
        <InputField />
      </div>
      <div>
        <span> نام خانوادگی: </span>
        <InputField />
      </div>
    </div>
    <StudentsDataTable></StudentsDataTable>
  </div>
</template>

<style>
div {
  direction: rtl;
}
/* Add any additional styling here */
</style>


<script setup>
const isAddStudentOpen = ref(false);
</script>
