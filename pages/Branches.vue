<template>
  <div class="my-5 mx-auto w-[1000px]" >
    <LoadingSpinner v-if="pending"></LoadingSpinner>
    <div v-else>
      <button
        class="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mb-2"
        @click="isAddStudentOpen = true"
      >
        ثبت شعبه جدید
      </button>
      <Transition :duration="550" name="nested">
        <div
          v-if="true"
          class="flex flex-wrap gap-y-4 rounded border border-gray-200 dark:border-gray-700 p-4 mb-4"
        >
          <div class="w-1/2">
            <div>اسم شعبه:</div>
            <InputField v-model="info.name" />
          </div>
          <div class="flex justify-between w-full">
            <button
              class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mb-2 mr-auto disabled:bg-indigo-300 disabled:cursor-not-allowed"
              :disabled="!info.name"
              @click="registerBranch"
            >
              ثبت
            </button>
          </div>
        </div>
      </Transition>
      <CardComponent
        v-for="(branch, index) in data"
        :key="index"
        :branch="branch"
        :loading="isDeletingBranch[index]"
        @deleteBranch="deleteBranch($event, index)"
      ></CardComponent>
    </div>
  </div>
</template>

<script setup>
const isDeletingBranch = ref([]);

const { data, refresh, pending } = await useFetch(
  "https://music-school-mckx.onrender.com/branches"
);
isDeletingBranch.value = data.value.map((branch) => false);
const info = ref({});

const registerBranch = async () => {
  const { data } = await useFetch(
    "https://music-school-mckx.onrender.com/branches",
    {
      method: "POST",
      body: info.value,
    }
  );
  refresh();
  info.value = {};
};

const deleteBranch = async (branch, index) => {
  isDeletingBranch.value.splice(index, 1, true);
  const { data } = await useFetch(
    `https://music-school-mckx.onrender.com/branches/${branch._id}`,
    {
      method: "DELETE",
    }
  );
  isDeletingBranch.value.splice(index, 1, false);

  refresh();
};
</script>

<style></style>
