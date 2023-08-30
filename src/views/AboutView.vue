<template>
  <RouterLink to="/">
    <el-button class=" m-2 rounded-2xl hover:bg-red-400 hover:text-white">Login</el-button>
  </RouterLink>
  <RouterLink to="/Home">
    <el-button class=" m-2 rounded-2xl hover:bg-red-400 hover:text-white">Element</el-button>
  </RouterLink>
  <div class="flex flex-wrap space-x-10 my-4">
    <div class="w-[500px] h-[500px]">
      <BarChart :bar-data="barData" :bar-options="barOptions" />
    </div>
    <div class="w-[500px] h-[300px]">
      <LineChart :line-data="lineData" :line-options="lineOptions" />
    </div>
    <div class="w-[500px] h-[300px]">
      <LineChart :line-data="lineData2" :line-options="lineOptions2" />
    </div>
    <div class="w-[500px] h-[200px]">
      <Chart :chart-data="chartData" :chart-options="chartOptions" />
    </div>
    <div class="w-[300px] my-1">
      <el-select
        v-model="value"
        class="m-2"
        placeholder="Select"
        size="large"
        @change="changeSelect"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <LiveVideo :live-url="liveUrl" @upload:live-url="getChangeUrl" />
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue'
import BarChart from '@/components/bar.vue'
import LineChart from '@/components/line.vue'
import Chart from '@/components/mixedChart.vue'
import LiveVideo from '@/components/flvjs.vue'
const barData = ref({
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ],
  datasets: [{
    label: 'Data One',
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)',
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)',
    ],
    borderWidth: 1,
    data: [65, 59, 80, 81, 56, 55, 40],
  }],
})
const barOptions = ref({
  responsive: true,

  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },

    tooltip: {
      callbacks: {
        title: () => ('資料'),
        label: function(item) {
          return `${item.label}: ${item.formattedValue}`
        },
        //  labelColor: function (context) {
        //     console.log('context',context)
        //     return {
        //       // borderColor: 'rgb(0, 0, 255)',
        //       backgroundColor: context.dataset.backgroundColor[context.dataIndex],
        //       borderWidth: 1,
        //       // borderDash: [2, 2],
        //       borderRadius: 2,
        //     };
        //   },
        labelTextColor: function(context) {
          return '#e0dee0'
        },
      },
    },
  },

})
const lineData = ref({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Data One',
    backgroundColor: '#f87979',
    borderColor: '#FC2525',
    pointBackgroundColor: 'white',
    data: [40, 39, 20, 40, 39, 80, 40],

  }, {
    label: 'Data two',
    backgroundColor: '#f8a879',
    borderColor: '#fc9b25',
    pointBackgroundColor: 'white',
    data: [25, 43, 20, 14, 48, 73, 64],
  }],
})
const lineOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart - Cubic interpolation mode',
    },
  },
  interaction: {
    intersect: false,
  },
  elements: {
    point: {
      radius: 1,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
    line: {
      tension: 0, // 禁用貝茲取線
    },
  },
})
const lineData2 = ref({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Data One',
    backgroundColor: '#79a1f8',
    borderColor: '#2582fc',
    pointBackgroundColor: 'white',
    data: [20, 59, 42, 40, 28, 60, 79],

  }, {
    label: 'Data two',
    backgroundColor: '#79f8c9',
    borderColor: '#17875e',
    pointBackgroundColor: 'white',
    data: [25, 32, 74, 34, 16, 52, 64],
  }],
})
const lineOptions2 = ref({
  responsive: true,
  maintainAspectRatio: false,

  interaction: {
    mode: 'index',
    intersect: false,
  },
  elements: {
    point: {
      radius: 1,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
    line: {
      tension: 0, // 禁用貝茲取線
    },
  },
})
const chartData = ref({
  labels: ['January', 'February', 'March', 'April'],
  datasets: [{
    type: 'bar',
    label: 'Bar Dataset',
    backgroundColor: '#f8797940',
    data: [10, 20, 30, 40],
  }, {
    type: 'line',
    label: 'Line Dataset',
    borderColor: '#FC2525',
    pointBackgroundColor: 'white',
    borderWidth: 2,
    data: [20, 40, 30, 10],
  }],

})
const chartOptions = ref({
  responsive: true,
})

const liveUrl = ref(null)
const options = reactive([
  {
    value: 'https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv',
    label: '串流1',
  },
  {
    value: 'https://mister-ben.github.io/videojs-flvjs/bbb.flv',
    label: '串流2',
  },
])
const value = ref(options[0].label)


const changeSelect = (value) => {
  console.log('select value:', value)
  liveUrl.value = value
}
onMounted(() => {
  liveUrl.value = options[0].value
})
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
