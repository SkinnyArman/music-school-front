<template>
  <div
    :class="isOpen ? 'w-40' : 'w-60'"
    class="flex flex-col h-screen p-3 duration-300 bg-gray-800 shadow"
  >
    <div class="space-y-3">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-bold text-white">داشبورد</h2>
        <button @click="isOpen = !isOpen">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div class="relative">
        <span class="absolute inset-y-0 left-0 flex items-center py-4">
          <button type="submit" class="p-2 focus:outline-none focus:ring">
          </button>
        </span>
      </div>
      <div class="flex-1">
        <ul class="pt-2 pb-4 space-y-1 text-sm">
          <li class="rounded-sm">
            <NuxtLink to="/" class="flex items-center p-2 space-x-3 rounded-md">
              <IconHome color="white" />

              <span class="text-gray-100">خانه</span>
            </NuxtLink>
          </li>
          <li class="rounded-sm">
            <NuxtLink
              to="/courses"
              class="flex items-center p-2 space-x-3 rounded-md"
            >
              <IconCertificate color="white" />

              <span class="text-gray-100">کلاس ها</span>
            </NuxtLink>
          </li>
          <li class="rounded-sm">
            <NuxtLink
              to="/payments"
              class="flex items-center p-2 space-x-3 rounded-md"
            >
              <IconCash color="white" />

              <span class="text-gray-100"> پرداخت ها </span>
            </NuxtLink>
          </li>
          <li class="rounded-sm">
            <NuxtLink
              to="/teachers"
              class="flex items-center p-2 space-x-3 rounded-md"
            >
              <IconUser color="white" />

              <span class="text-gray-100"> اساتید </span>
            </NuxtLink>
          </li>
          <li class="rounded-sm">
            <NuxtLink
              to="/students"
              class="flex items-center p-2 space-x-3 rounded-md"
            >
              <IconSchool color="white" />

              <span class="text-gray-100 ml-14"> هنرآموزان </span>
            </NuxtLink>
          </li>
          <li class="rounded-sm">
            <NuxtLink
              to="/branches"
              class="flex items-center p-2 space-x-3 rounded-md"
            >
              <IconSchool color="white" />

              <span class="text-gray-100 ml-14"> شعبه ها </span>
            </NuxtLink>
          </li>
          <li class="rounded-sm">
            <NuxtLink
              to="/majors"
              class="flex items-center p-2 space-x-3 rounded-md"
            >
              <IconSchool color="white" />

              <span class="text-gray-100 ml-14"> رشته ها </span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  IconUser,
  IconUsers,
  IconHome,
  IconSchool,
  IconCash,
  IconCertificate,
} from "@tabler/icons-vue";

const isOpen = ref(false);
</script>
