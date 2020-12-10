<template>
<div class="vue">
  <header class="vue-header">
    <img :src="logo" class="vue-logo mb-5" alt="logo" />
    <p>
      <span class="fab fa-vuejs"></span> <router-link class="vue-link" to="/main/dashboard">{{hello}}</router-link>
    </p>
  </header>
</div>
</template>

<script src="./home.js"></script>
<style src="./home.scss" lang="scss" scoped></style>