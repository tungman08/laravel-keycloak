<template>
<div class="app">
  <app-layout-header></app-layout-header>
  <div class="app-body">
    <app-layout-navigator></app-layout-navigator>
    <main class="main">
      <app-layout-breadcrumb></app-layout-breadcrumb>
      <div class="container-fluid">
        <router-view></router-view>
      </div>
    </main>
    <app-layout-aside></app-layout-aside>
  </div>
  <app-layout-footer></app-layout-footer>
</div>
</template>

<script src="./main.js"></script>
<style src="./main.scss" lang="scss" scoped></style>
