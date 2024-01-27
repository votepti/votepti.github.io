import { computed, ref } from 'vue'

export default function () {
  const electionData = [
    {
      englishName: 'peacook',
      urduName: 'مور',
      location: 'na163',
      locationFull: 'NA-163 (Bahawalnagar-lV)',
      name: 'Shaukat Basra',
      whatsapp: 'https://whatsapp.com/channel/0029VaKAL11GpLHVYoycV63d',
    },
  ]

  const data = ref(electionData)
  const location = ref('')

  const selectedCanidate = computed(() => data.value.find(item => item.location.toLocaleLowerCase() === location.value.toLocaleLowerCase()))

  return {
    data,
    location,
    selectedCanidate,
  }
}
