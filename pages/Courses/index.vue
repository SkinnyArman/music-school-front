<template>
  <div class="my-5 mx-auto w-[1000px]">
    <Nuxt-Link href="/courses/new">
      <button
        class="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mb-2"
      >
        ایجاد کلاس جدید
      </button>
    </Nuxt-Link>
    <CoursesDataTable
      v-if="courses"
      :courses="courses.courses"
      :current-page="courses.currentPage"
      :total-pages="courses.totalPages"
      @deleteCourse="deleteCourse"
      @paginate="paginate"
    ></CoursesDataTable>
  </div>
</template>

<script setup>
const currentPage = ref(1);

const fetchUrl = computed(
  () =>
    `https://music-school-mckx.onrender.com/courses?page=${currentPage.value}`
);
const { data: courses, refresh } = useFetch(fetchUrl);

console.log(courses.value);

const paginate = (pageNumber) => {
  currentPage.value = pageNumber;
  refresh();
};
const info = ref({});
// const toast = useToast();
const NECESSARY_FIELDS = [
  "name",
  "surname",
  "birthdate",
  "birthplace",
  "branchNumber",
  "email",
];
const isAllDateEntered = computed(() =>
  NECESSARY_FIELDS.every((field) => info.value[field])
);
const deleteCourse = async (student) => {
  const { data } = await useFetch(
    `https://music-school-mckx.onrender.com/courses/${student._id}`,
    {
      method: "DELETE",
    }
  );
  refresh();
  // toast.add({ title: "هنرآموز ثبت نام شد" });
};

const setBranch = (branch) => {
  info.value.branchNumber = branch.branchNumber;
};
</script>
