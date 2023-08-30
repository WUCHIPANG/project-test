<template>
  <Bar id="my-chart-id" :data="data" :options="options" />
</template>

<script setup>

import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps({
  barData: {
    type: Object,
    required: true
  },
  barOptions: {
    type: Object,
    default: () => { }
  }
})
const data = props.barData
const options = props.barOptions
console.log('barData', data)
console.log('barOptions', options)
</script>