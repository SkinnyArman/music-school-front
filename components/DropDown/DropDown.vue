<template>
  <div ref="target" class="relative inline-block text-left">
    <div>
      <button
        type="button"
        class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        @click="toggleDropdown"
      >
        {{ selectedItem ? selectedItem[props.fieldToShow] : "انتخاب" }}
        <svg
          class="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <transition>
      <div
        v-if="showDropdown"
        class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
      >
        <div class="py-1" role="none">
          <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
          <a
            v-for="item in props.items"
            :key="item.id"
            href="#"
            class="text-gray-700 block px-4 py-2 text-sm flex"
            role="menuitem"
            tabindex="-1"
            @click="setItem(item)"
            >{{ item[props.fieldToShow] }}</a
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";

const showDropdown = ref(false);
const selectedItem = ref(null);
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const target = ref(null);
onClickOutside(target, (event) => (showDropdown.value = false));

const props = defineProps(["items", "fieldToShow"]);
const emit = defineEmits(["setItem"]);

const setItem = (item) => {
  toggleDropdown();
  selectedItem.value = item;
  emit("setItem", item);
};
</script>

<style scoped>
/* Add any additional styling here */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
