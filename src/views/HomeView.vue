<template>
  <main>
    <RouterLink to="/">
          <el-button class=" m-2 rounded-2xl hover:bg-red-400 hover:text-white">Login</el-button>
        </RouterLink>
   <RouterLink to="/About">
    <el-button class=" m-2 rounded-2xl hover:bg-red-400 hover:text-white">Chart</el-button>
   </RouterLink> 
    <TheWelcome />
  </main>
</template>
<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

