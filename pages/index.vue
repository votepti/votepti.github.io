<script setup>
import useForm from './form'

const { data, location } = useForm()
</script>

<template>
  <div class="space-y-6 md:mt-5 w-full md:w-8/12 xl:w-6/12">
    <div class="flex justify-center">
      <img
        src="/ik.jpg"
        alt="Imran Khan"
        class="
        md:rounded-md
        border border-green-500 hover:border-green-800 hover:scale-105 duration-300 transition-all"
      >
    </div>
    <div class="flex justify-center">
      <input
        v-model="location"
        type="text"
        class="border w-full bg-transparent rounded-full py-[14px]
        pl-4 outline-none shadow-md hover:shadow-lg transition-all duration-300
         placeholder:text-sm md:placeholder:text-base
        "
        name="number"
        placeholder="Enter constituency without space (e.g., NA1, PK1, PS1, PB1, PP1 etc.)"
      >
    </div>
    <div
      v-if="!location"
      class="flex justify-center text-red-400"
    >
      Please enter a constituency number.
    </div>

    <div
      v-if="!location"
      class="flex justify-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
    >
      Symbols for Sindh (PS) and Balochistan Assemblies (PB) candidates will be updated in 24-48 hours.
    </div>
    <div
      v-if="!location"
      class="text-center px-4 py-3"
    >
      Next event: PTI TikTok Jalsa on January 24, 2024 at 9:00pm (Pakistan time) <br>
      follow
      <a
        href="https://www.tiktok.com/@ptitiktoklive"
        target="_blank"
        rel="noopener noreferrer"
        class="text-sky-500 font-semibold dark:text-sky-400"
      >https://www.tiktok.com/@ptitiktoklive</a> to join
    </div>
  </div>
</template>
