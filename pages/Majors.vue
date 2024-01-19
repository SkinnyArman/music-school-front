<template>
  <div class="my-5 mx-auto w-[1000px]">
    <div class="flex gap-x-1 flex-wrap">
      <MajorCard
        class="min-w-[48%]"
        v-for="(category, index) in mainMajors"
        :key="index"
        :category="category"
        :subcategories="subcategories(category)"
        v-model="info.name"
        @addSubcategory="addSubcategory(category)"
      ></MajorCard>
    </div>
  </div>
</template>

<script setup>
const { data, refresh } = useFetch(
  "https://music-school-mckx.onrender.com/categories"
);

const mainMajors = computed(() =>
  data.value.filter((major) => !major.parentCategory)
);
const subcategories = (category) => {
  return data.value.filter(
    (major) => major.parentCategory && major.parentCategory._id === category._id
  );
};

const info = ref({});

const addSubcategory = async (category) => {
  info.value.parentCategoryId = category._id;
  const { data } = await useFetch(
    "https://music-school-mckx.onrender.com/categories",
    {
      method: "POST",
      body: info.value,
    }
  );
  info.value = {};
  refresh();
};
</script>

<style></style>
