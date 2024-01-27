<script setup>
import useForm from './form'

const { location, selectedCanidate } = useForm()
</script>

<template>
  <div class="space-y-6 md:mt-5 w-full md:w-8/12 xl:w-6/12">
    <!-- Welcome banner -->
    <div class="flex justify-center">
      <img
        src="/ik.jpg"
        alt="Imran Khan"
        class="
        md:rounded-md
        border border-green-500 hover:border-green-800 hover:scale-105 duration-300 transition-all"
      >
    </div>

    <LocationInput v-model="location" />

    <CanidateDisplayBox
      v-if="location"
      :selected-canidate="selectedCanidate"
      :location="location"
    />
    <div
      v-if="!location"
      class="flex justify-center text-red-400"
    >
      Please enter a constituency number.
    </div>

    <Announcements v-if="!location" />
  </div>
</template>
