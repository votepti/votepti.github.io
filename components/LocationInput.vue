<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex justify-center">
    <input
      :value="props.modelValue"
      type="text"
      class="border w-full bg-transparent rounded-full py-[14px]
        pl-4 outline-none shadow-md hover:shadow-lg transition-all duration-300
         placeholder:text-sm md:placeholder:text-base
        "
      name="number"
      placeholder="Enter constituency without space (e.g., NA1, PK1, PS1, PB1, PP1 etc.)"
      @input="emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>
