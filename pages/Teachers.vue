<template>
  <div class="my-5 mx-auto w-[1000px]">
    <button
      class="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mb-2"
      @click="isAddStudentOpen = true"
    >
      ثبت نام کردن استاد
    </button>
    <Transition :duration="550" name="nested">
      <div
        v-if="isAddStudentOpen"
        class="flex flex-wrap gap-y-4 rounded border border-gray-200 dark:border-gray-700 p-4 mb-4"
      >
        <div class="w-1/2">
          <div>نام:</div>
          <InputField v-model="info.name" />
        </div>
        <div class="w-1/2">
          <div>نام خانوادگی:</div>
          <InputField v-model="info.surname" />
        </div>
        <div class="w-1/2">
          <div>ایمیل:</div>
          <InputField v-model="info.email" />
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
            v-model="info.birthdate"
          />
        </div>
        <div class="w-1/2">
          <div>محل تولد:</div>
          <InputField v-model="info.birthplace" />
        </div>
        <div class="w-full">
          <div>لینک عکس:</div>
          <InputField />
        </div>
        <div class="flex justify-between w-full">
          <button
            class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mb-2 mr-auto disabled:bg-indigo-300 disabled:cursor-not-allowed"
            :disabled="!isAllDateEntered"
            @click="registerStudent"
          >
            ثبت نام
          </button>
        </div>
      </div>
    </Transition>

    <TeachersDataTable
      v-if="teachers"
      :teachers="teachers.teachers"
      :current-page="teachers.currentPage"
      :total-pages="teachers.totalPages"
      @deleteStudent="deleteStudent"
      @paginate="paginateStudents"
    ></TeachersDataTable>
  </div>
</template>

<style>
div {
  direction: rtl;
}
.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
        Hack around a Chrome 96 bug in handling nested opacity transitions.
      This is not needed in other browsers or Chrome 99+ where the bug
      has been fixed.
    */
  opacity: 0.001;
}
</style>

<script setup>
const { data } = useFetch("https://music-school-mckx.onrender.com/branches");

const currentPage = ref(1);

const fetchUrl = computed(
  () => `https://music-school-mckx.onrender.com/teachers?page=${currentPage.value}`
);
const { data: teachers, refresh } = useFetch(fetchUrl);

const paginateStudents = (pageNumber) => {
  currentPage.value = pageNumber;
  refresh();
};
const isAddStudentOpen = ref(false);
const info = ref({});
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
const registerStudent = async () => {
  const { data } = await useFetch("https://music-school-mckx.onrender.com/students", {
    method: "POST",
    body: info,
  });
  refresh();
  isAddStudentOpen.value = false;
  // toast.add({ title: "هنرآموز ثبت نام شد" });
  info.value = {};
};

const deleteStudent = async (student) => {
  const { data } = await useFetch(
    `https://music-school-mckx.onrender.com/students/${student._id}`,
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
