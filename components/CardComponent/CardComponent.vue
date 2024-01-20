<template>
  <div
    class="mx-auto p-4 mb-4 shadow-lg rounded-lg relative hover:bg-gray-100 flex flex-col justify-center"
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
        <p class="text-gray-600 w-1/2">
          پرداختی های شعبه: {{ props.branch.totalPayments + " تومان" }}
        </p>
      </div>
    </div>

    <DeleteButton
      @click="emit('deleteBranch', props.branch)"
      class="mb-2"
      :loading="props.loading"
    >
      حذف شعبه
    </DeleteButton>
    <p class="text-red-500 text-xs">
      با حذف کردن شعبه تمامی اساتید، هنرجویان و کلاس های ایجاد شده در شعبه حذف
      می‌شود.
    </p>
  </div>
</template>

<script setup>
const props = defineProps(["branch", "loading"]);
const emit = defineEmits(["deleteBranch"]);
</script>
