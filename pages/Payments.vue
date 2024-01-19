<template>
  <div class="my-5 mx-auto w-[1000px]">
    <button
      class="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mb-2"
      @click="isAddStudentOpen = true"
    >
      ثبت پرداخت جدید
    </button>
    <Transition :duration="550" name="nested">
      <div
        v-if="isAddStudentOpen"
        class="flex flex-wrap gap-y-4 rounded border border-gray-200 dark:border-gray-700 p-4 mb-4"
      >
        <div class="w-1/2">
          <div>پرداخت کننده:</div>
          <InputField v-model="search" placeholder="سرچ با نام خانوادگی" />
        </div>
        <div class="w-1/2">
          <div>مقدار (تومان):</div>
          <InputField v-model="info.amount" type="number" />
        </div>
        <div>
          <div
            v-for="searchResult in searchResults"
            :key="searchResult._id"
            class="bg-gray-400 rounded-3xl text-white flex items-center p-4"
          >
            <input
              type="radio"
              class="ml-2"
              :value="searchResult._id"
              v-model="info.studentId"
            />
            آرمان امینی
          </div>
        </div>
        <div class="flex justify-between w-full">
          <button
            class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mb-2 mr-auto disabled:bg-indigo-300 disabled:cursor-not-allowed"
            :disabled="!isAllDateEntered"
            @click="submitTransaction"
          >
            ثبت
          </button>
        </div>
      </div>
    </Transition>

    <StudentsDataTable
      v-if="students"
      :students="students.students"
      :current-page="students.currentPage"
      :total-pages="students.totalPages"
      @deleteStudent="deleteStudent"
      @paginate="paginateStudents"
    ></StudentsDataTable>
  </div>
</template>

<script setup>
const info = ref({});
const searchResults = ref([]);
const search = ref("");

const { data } = useFetch("https://music-school-mckx.onrender.com/branches");

const currentPage = ref(1);

const fetchUrl = computed(
  () =>
    `https://music-school-mckx.onrender.com/students?page=${currentPage.value}`
);
const { data: students, refresh } = useFetch(fetchUrl);

const paginateStudents = (pageNumber) => {
  currentPage.value = pageNumber;
  refresh();
};

watch(search, async (newVal) => {
  let url = `https://music-school-mckx.onrender.com/students?surname=${newVal}`;
  const { data } = await useFetch(url);
  searchResults.value = data.value.students;
});

const isAddStudentOpen = ref(false);

const NECESSARY_FIELDS = ["amount", "studentId"];
const isAllDateEntered = computed(() =>
  NECESSARY_FIELDS.every((field) => info.value[field])
);
const submitTransaction = async () => {
  const { data } = await useFetch(
    "https://music-school-mckx.onrender.com/transactions",
    {
      method: "POST",
      body: info.value,
    }
  );
  refresh();
  info.value = {};
};
</script>
