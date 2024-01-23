<template>
  <div class="my-5 mx-auto w-[1000px]">
    <div
      class="flex flex-wrap gap-y-4 rounded border border-gray-200 dark:border-gray-700 p-4 mb-4"
    >
      <div class="w-1/2">
        <div>موضوع:</div>
        <DropDown
          v-if="courses"
          :items="availableCourses"
          fieldToShow="name"
          @setItem="setTopic"
        />
      </div>
      <div class="w-1/2">
        <div>استاد کلاس:</div>
        <DropDown
          v-if="teachers"
          :items="teachers.teachers"
          fieldToShow="name"
          @setItem="setTeacher"
        />
      </div>
      <div class="w-1/2">
        <div>سطح کلاس:</div>
        <DropDown :items="level" fieldToShow="name" @setItem="setLevel" />
      </div>
      <div class="w-1/2">
        <div>شعبه کلاس:</div>
        <DropDown :items="branches" fieldToShow="name" @setItem="setBranch" />
      </div>
      <div class="w-1/2">
        <div>شهریه کلاس:</div>
        <InputField v-model="info.tuition" type="number" />
      </div>
      <div class="w-1/2">
        <div>تاریخ شروع کلاس:</div>
        <input
          type="date"
          class="border-2 border-gray-300 bg-white text-gray-700 rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          required
          v-model="info.startDate"
        />
      </div>
      <div class="w-1/2">
        <div>تاریخ پایان کلاس:</div>
        <input
          type="date"
          class="border-2 border-gray-300 bg-white text-gray-700 rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          required
          v-model="info.endDate"
        />
      </div>
    </div>

    <h3 class="text-lg">انتخاب هنرآموزان کلاس</h3>
    <simple-students-data-table
      v-if="students"
      :students="students.students"
      :current-page="students.currentPage"
      :total-pages="students.totalPages"
      v-model="info.students"
      @deleteStudent="deleteStudent"
      @paginate="paginateStudents"
    ></simple-students-data-table>
    <div class="flex justify-between w-full">
      <button
        class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mb-2 mr-auto disabled:bg-indigo-300 disabled:cursor-not-allowed"
        @click="enrollStudents"
      >
        ایجاد کلاس
      </button>
    </div>
  </div>
</template>

<script setup>
const { data: branches } = useFetch("https://music-school-mckx.onrender.com/branches");
const { data: teachers } = useFetch(
  "https://music-school-mckx.onrender.com/teachers"
);
const { data: courses } = await useFetch(
  "https://music-school-mckx.onrender.com/categories"
);

const availableCourses = computed(() =>
  courses.value.filter((course) => course.parentCategory)
);

const info = ref({
  students: [],
});
const level = ref([
  {
    name: "مبتدی",
    value: "Beginner",
  },
  {
    name: "متوسط",
    value: "Intermediate",
  },
  {
    name: "پیشرفته",
    value: "Advanced",
  },
]);
const setLevel = (level) => {
  info.value.level = level.value;
};
const setTeacher = (teacher) => {
  info.value.teacher = teacher._id;
};
const setTopic = (topic) => {
  console.log(topic._id);
  info.value.topic = topic._id;
};

const setBranch = (branch) => {
  info.value.branch = branch._id
}

const currentPage = ref(1);

const fetchUrl = computed(
  () =>
    `https://music-school-mckx.onrender.com/students?page=${currentPage.value}`
);
const { data: students, refresh } = useFetch(fetchUrl);

//enrolling
const enrollStudents = async () => {
  const { data } = await useFetch(
    "https://music-school-mckx.onrender.com/new-course",
    {
      method: "POST",
      body: info.value,
    }
  );
  console.log("classs created!");
  info.value = {};
};
</script>
