<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 mx-auto">
        <Header />
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Header from './components/Header.vue'
  import Home from './components/Home.vue'
</script>


<style>
</style>