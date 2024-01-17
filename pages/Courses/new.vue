<template>
  <div class="my-5 mx-auto w-[1000px]">
    <div
      class="flex flex-wrap gap-y-4 rounded border border-gray-200 dark:border-gray-700 p-4 mb-4"
    >
      <div class="w-1/2">
        <div>نام:</div>
        <InputField />
      </div>
      <div class="w-1/2">
        <div>نام خانوادگی:</div>
        <InputField />
      </div>
      <div class="w-1/2">
        <div>ایمیل:</div>
        <InputField />
      </div>
      <div class="w-1/2">
        <div>شعبه:</div>
        <DropDown :items="data" fieldToShow="name" @setItem="setBranch" />
      </div>
      <div class="w-1/2">
        <div>تاریخ تولد:</div>
        <input
          type="date"
          class="border-2 border-gray-300 bg-white text-gray-700 rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          required
        />
      </div>
      <div class="w-1/2">
        <div>محل تولد:</div>
        <InputField />
      </div>
      <div class="w-full">
        <div>لینک عکس:</div>
        <InputField />
      </div>
      <div class="flex justify-between w-full">
        <button
          class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mb-2 mr-auto disabled:bg-indigo-300 disabled:cursor-not-allowed"
        >
          ایجاد کلاس
        </button>
      </div>
    </div>
    <simple-students-data-table
      v-if="students"
      :students="students.students"
      :current-page="students.currentPage"
      :total-pages="students.totalPages"
      @deleteStudent="deleteStudent"
      @paginate="paginateStudents"
    ></simple-students-data-table>
  </div>
</template>

<script setup>
const { data } = useFetch("http://localhost:3030/branches");

const currentPage = ref(1);

const fetchUrl = computed(
  () => `http://localhost:3030/students?page=${currentPage.value}`
);
const { data: students, refresh } = useFetch(fetchUrl);
</script>
