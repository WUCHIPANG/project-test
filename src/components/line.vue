<template>
  <Line :data="data" :options="options" />
</template>
<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
const props = defineProps({
  lineData: {
    type: Object,
    required: true
  },
  lineOptions: {
    type: Object,
    default: () => { }
  }
})
const data = props.lineData
const options = props.lineOptions
console.log('lineData', data)
console.log('lineOptions', options)
</script>