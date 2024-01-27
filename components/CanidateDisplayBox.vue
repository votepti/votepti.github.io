<script setup>
const { selectedCanidate, location } = defineProps(['selectedCanidate', 'location'])
</script>

<template>
  <div
    v-if="!selectedCanidate"
    class="flex justify-center text-red-400"
  >
    No candidate found for {{ location }}
  </div>
  <div
    v-if="!selectedCanidate"
    class="flex justify-center text-green-600"
  >
    To see how this portal functions, enter NA163 in search
  </div>

  <div
    v-if="selectedCanidate"
    class="flex justify-center"
  >
    <div class="space-y-3 text-center w-full">
      <div class="text-2xl text-red-500">
        {{ selectedCanidate.locationFull }}
      </div>
      <div class="text-xl text-green-600">
        {{ selectedCanidate.name }}
      </div>
      <div class=" uppercase text-xl">
        {{ selectedCanidate.englishName }} <span class="text-2xl">{{ selectedCanidate.urduName }}</span>
      </div>
      <div class="flex justify-center">
        <img
          :src="`/e/${selectedCanidate.englishName}.jpg`"
          :alt="`${selectedCanidate.englishName} sign`"
        >
      </div>
      <div class="flex justify-center">
        <a
          :href="selectedCanidate.whatsapp"
          class="text-sky-500 font-semibold dark:text-sky-400"
        >
          <img
            class="inline"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png"
            alt="WhatsApp"
            style="width: 30px; height: 30px;"
          >
          Join Halqa's WhatsApp Channel</a>
      </div>
    </div>
  </div>
</template>
