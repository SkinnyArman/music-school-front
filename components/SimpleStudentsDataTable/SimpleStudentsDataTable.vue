<template>
  <!-- component -->
  <div class="flex flex-col">
    <div class="overflow-x-auto">
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
                  class="px-4 py-3.5 text-sm font-normal whitespace-nowrap text-justify rtl:text-right text-gray-500 dark:text-gray-400"
                >
                  {{ header }}
                </th>
              </tr>
            </thead>
            <tbody
              class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
            >
              <tr v-for="student in props.students" :key="student.id">
                <td class="pr-5">
                  <input type="checkbox" :value="student._id" v-model="model" />
                </td>
                <td
                  class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                >
                  <div
                    class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800"
                  >
                    <h2 class="text-sm font-normal">
                      {{ student.branch.name }}
                    </h2>
                  </div>
                </td>
                <td
                  class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                >
                  <div class="flex items-center gap-x-2">
                    <img
                      v-if="student.imageURL"
                      class="object-cover w-8 h-8 rounded-full"
                      :src="student.imageURL"
                      alt=""
                    />
                    <div>
                      <h2
                        class="text-sm font-medium text-gray-800 dark:text-white"
                      >
                        {{ student.name + " " + student.surname }}
                      </h2>
                      <p
                        class="text-xs font-normal text-gray-600 dark:text-gray-400"
                      >
                        {{ student.email }}
                      </p>
                    </div>
                  </div>
                </td>

                <td
                  class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                >
                  {{ student.enrolledClassCount }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["deleteStudent", "paginate"]);
const props = defineProps(["students", "currentPage", "totalPages"]);

const headers = ref([" ", "شعبه", "اطلاعات", "تعداد کلاس های ثبت نام کرده"]);
const model = defineModel();
</script>
