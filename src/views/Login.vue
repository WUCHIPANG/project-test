<template>
  <div class="m-4">
    Login
    <RouterLink to="/Home">
      <el-button class=" m-2 rounded-2xl hover:bg-red-400 hover:text-white">Element</el-button>
    </RouterLink>
    <RouterLink to="/About">
      <el-button class=" m-2 rounded-2xl hover:bg-red-400 hover:text-white">Chart</el-button>
    </RouterLink>

    <div v-if="userInfo">
      <p>Name: {{ userInfo.name }}</p>
      <p>Email: {{ userInfo.email }}</p>
    </div>
    <div v-if="accessToken" class="w-[180px]">
      <p>Access Token: {{ accessToken }}</p>
    </div>
    <div v-if="loggedIn">
      <el-button class=" m-2 rounded hover:bg-gray-800 hover:text-white" @click="logout">LogOut</el-button>
    </div>
    <div v-else class="my-5 space-y-4">
      <div>
        <GoogleLogin :callback="callback" />
      </div>
      <div>
        <GoogleLogin :callback="callback1" popup-type="TOKEN">
          <button class=" font-google px-4 py-2 border flex gap-2 text-sm border-slate-200 rounded text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
            <img
              class="w-5 h-5"
              src="@/assets/googleLogo.svg"
              loading="lazy"
              alt="google logo"
            >
            <!-- https://www.svgrepo.com/show/475656/google-color.svg -->
            <!-- <span>使用 Google 帳戶登入</span> -->
            <span>Sign in with Google</span>
          </button>
        </GoogleLogin>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { decodeCredential, googleLogout, googleTokenLogin } from 'vue3-google-login'

const userInfo = ref()
const loggedIn = ref(false)
const accessToken = ref()
const callback = (res) => {
  const { credential } = res
  userInfo.value = decodeCredential(credential)
  loggedIn.value = true
}
const callback1 = (res) => {
  accessToken.value = res.access_token
  loggedIn.value = true
}
const login = () => {
  googleTokenLogin().then((res) => {
    accessToken.value = res.access_token
    loggedIn.value = true
  })
}
const logout = () => {
  console.log('登出')
  googleLogout()
  userInfo.value = ''
  accessToken.value = ''
  loggedIn.value = false
}
</script>
