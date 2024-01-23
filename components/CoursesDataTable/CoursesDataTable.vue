<template>
  <!-- component -->
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6">
      <div class="min-w-full py-2 align-middle">
        <div
          class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg"
        >
          <table
            class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
          >
            <thead class="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th
                  v-for="header in headers"
                  :key="header"
                  scope="col"
                  class="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400 whitespace-nowrap"
                >
                  {{ header }}
                </th>
              </tr>
            </thead>
            <tbody
              class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
            >
              <tr v-for="course in props.courses" :key="course.id">
                <td
                  class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center"
                >
                  {{ course.topic.name }}
                </td>
                <td
                  class="4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center"
                >
                  {{ new Date(course.startDate).toLocaleDateString("fa") }}
                </td>
                <td
                  class="4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center"
                >
                  {{ new Date(course.endDate).toLocaleDateString("fa") }}
                </td>
                <td
                  class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                >
                  <div class="flex items-center gap-x-2">
                    <img
                      v-if="course.teacher.imageURL"
                      class="object-cover w-8 h-8 rounded-full"
                      :src="course.teacher.imageURL"
                      alt=""
                    />
                    <div>
                      <h2
                        class="text-sm font-medium text-gray-800 dark:text-white"
                      >
                        {{ course.teacher.name + " " + course.teacher.surname }}
                      </h2>
                      <p
                        class="text-xs font-normal text-gray-600 dark:text-gray-400"
                      >
                        {{ course.teacher.major }}
                      </p>
                    </div>
                  </div>
                </td>
                <td
                  class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-center"
                >
                  {{ course.tuition }} هزار تومان
                </td>
                <td
                  class="px-4 py-4 text-center text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                >
                  {{ course.students.length }}
                </td>

                <td class="px-4">
                  <button
                    class="flex justify-center items-center bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded w-24 h-7 disabled:bg-red-300"
                    @click="emit('deleteCourse', course)"
                  >
                    حذف کلاس
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="flex items-center justify-between mt-6">
    <span
      :class="{ 'opacity-0': props.currentPage === 1 }"
      class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
      @click="$emit('paginate', props.currentPage - 1)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5 rtl:-scale-x-100"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
        />
      </svg>

      <span> قبلی </span>
    </span>

    <div class="items-center hidden md:flex gap-x-3">
      <a
        href="#"
        class="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60"
        >{{ props.currentPage }}</a
      >
    </div>

    <span
      class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
      :class="{ 'opacity-0': props.currentPage === props.totalPages }"
      @click="$emit('paginate', props.currentPage + 1)"
    >
      <span> بعدی </span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5 rtl:-scale-x-100"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
    </span>
  </div>
</template>

<script setup>
const emit = defineEmits(["deleteStudent", "paginate"]);
const props = defineProps(["courses", "currentPage", "totalPages"]);

const headers = ref([
  "موضوع کلاس",
  "تاریخ شروع کلاس",
  "تاریخ پایان کلاس",
  "استاد",
  "شهریه",
  "تعداد هنرجویان",
  "عملیات",
]);
</script>
