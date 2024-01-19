<template>
  <div
    class="mx-auto p-4   mb-4 shadow-lg rounded-lg relative hover:bg-gray-100 flex flex-col justify-center"
  >
    <div class="p-4 rounded-lg">
      <h2 class="text-lg font-semibold">{{ props.branch.name }}</h2>
      <div class="flex flex-wrap">
        <p class="text-gray-600 w-1/2">
          تعداد هنرجویان: {{ props.branch.numberOfStudents }}
        </p>
        <p class="text-gray-600 w-1/2">
          تعداد اساتید: {{ props.branch.numberOfTeachers }}
        </p>
        <p class="text-gray-600 w-1/2">
         تعداد کلاس ها: {{ props.branch.numberOfCourses }}
        </p>
        <p class="text-gray-600 w-1/2">پرداختی های شعبه: {{ props.branch.totalPayments + ' تومان' }}</p>
      </div>
    </div>
    <button
      class="flex mb-2 justify-center items-center bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded w-24 h-7 disabled:bg-red-300"
      @click="emit('deleteBranch', props.branch)"
    >
      حذف شعبه
    </button>
    <p class="text-red-500 text-xs">
      با حذف کردن شعبه تمامی اساتید، هنرجویان و کلاس های ایجاد شده در شعبه حذف
      می‌شود.
    </p>
  </div>
</template>

<script setup>
const props = defineProps(["branch"]);
const emit = defineEmits(["deleteBranch"])
</script>
