<template>
  <div
    class="mx-auto p-4 mb-4 shadow-lg rounded-lg hover:bg-gray-100 flex flex-col"
  >
    <div class="p-4 rounded-lg">
      <div class="flex justify-between mb-2">
        <h2 class="text-xl font-semibold">{{ props.category.name }}</h2>
      </div>
      <div class="">
        <p
          class="text-gray-600"
          v-for="subcategory in props.subcategories"
          :key="subcategory._id"
        >
          {{ subcategory.name }}
        </p>
      </div>
    </div>
    <div class="flex items-center h-10">
      <div class="flex" :class="{ 'order-2': showInput }">
        <button
          class="bg-indigo-600 hover:bg-indigo-700 h-full text-white font-bold flex justify-center items-center p-2 mr-auto rounded disabled:bg-indigo-300 disabled:cursor-not-allowed"
          :class="{ 'w-24': showInput }"
          @click="onAddClick"
        >
          {{ showInput ? "ثبت" : "اضافه کردن زیر مجموعه" }}
        </button>
        <button
          v-if="showInput"
          class="bg-red-700 mr-2 h-full text-white font-bold flex justify-center items-center p-2 rounded disabled:bg-indigo-300 disabled:cursor-not-allowed"
          :class="{ 'w-24': showInput }"
          @click="showInput = false"
        >
          لفو
        </button>
      </div>

      <InputField
        v-if="showInput"
        class="h-full ml-2"
        placeholder="نام زیرمجموعه"
        :class="{ 'order-1 w-2/3': showInput }"
        v-model="model"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["category", "subcategories"]);
const emit = defineEmits(["deleteCategory", "addSubcategory"]);

const showInput = ref(false);

const onAddClick = () => {
  if (showInput.value) {
    showInput.value = false;
    emit("addSubcategory");
  } else {
    showInput.value = true;
  }
};

const model = defineModel();
</script>
