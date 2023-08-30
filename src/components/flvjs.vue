<template>
  <div class="w-full h-full border border-gray-700 rounded">
    <video ref="videoElement" autoplay controls />
    <el-button class=" m-2 rounded-2xl hover:bg-red-400 hover:text-white" @click="onClick">{{ button?'>':'||' }}</el-button>
  </div>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue'
import flvjs from 'flv.js'
// https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv
const button = ref(true)
const props = defineProps({
  liveUrl: {
    type: String,
    default: '',
  },
})

watch(() => props.liveUrl, (url) => {
  console.log('watch url:', url)
  playFlv()
})
const videoElement = ref()
const flvPlayer = ref(null)
const playFlv = () => {
  destroyFlv()
  console.log('playFlv url', props.liveUrl)
  if (flvjs.isSupported() && props.liveUrl) {
    flvPlayer.value = flvjs.createPlayer({
      type: 'flv',
      url: props.liveUrl,
      isLive: true, // 直播模式
      hasAudio: false, // 關閉音頻
      hasVideo: true, // 播放畫面
      enableWorker: true,
      stashInitialSize: 128, // 撥放器端緩存
      enableStashBuffer: false, // 播放時,是否啟用播放緩存,只在直播有用
      autoCleanupSourceBuffer: true, // 自動清除緩存
    })
    flvPlayer.value.attachMediaElement(videoElement.value)
    flvPlayer.value.load()
    // 影片LOAD完後才能播放
    flvPlayer.value.on(flvjs.Events.LOADING_COMPLETE, () => {
      flvPlayer.value.play()
    })
    flvPlayEvent()
  } else {
    console.log('不支援Flv格式/影片尚未加載完成')
  }
}

const flvPlayEvent = () => {
  // 錯誤銷毀重建
  flvPlayer.value.on(flvjs.Events.ERROR, (errorType, errorDetail, errorInfo) => {
    console.log('類型' + JSON.stringify(errorType), '內容' + errorDetail, '訊息' + errorInfo)
    if (flvPlayer.value) {
      destroyFlv()
      return playFlv()
    }
  })
  // 【重要監聽】 http請求建立完成後,該事件會一直監聽flvjs
  flvPlayer.value.on(flvjs.Events.STATISTICS_INFO, (errorType, errorDetail, errorInfo) => {
    console.log('類型' + JSON.stringify(errorType), '內容' + errorDetail, '訊息' + errorInfo)
  })
}

// 註銷
const destroyFlv = () => {
  if (flvPlayer.value) {
    flvPlayer.value.pause()
    flvPlayer.value.unload()
    flvPlayer.value.detachMediaElement()
    flvPlayer.value.destroy(true)
    flvPlayer.value = null
  }
}

const onClick = () => {
  button.value = !button.value
  if (button.value) {
    // 播放中,斷流
    flvPlayer.value.unload()
    flvPlayer.value.detachMediaElement()
  } else {
    // 已斷流重新播放
    flvPlayer.value.attachMediaElement(videoElement.value)
    flvPlayer.value.load()
    // 影片LOAD完後才能播放
    flvPlayer.value.on(flvjs.Events.LOADING_COMPLETE, () => {
      flvPlayer.value.play()
    })
  }
}

</script>
