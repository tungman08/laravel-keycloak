<template>
<div class="animated fadeIn">
  <div class="card">
    <div class="card-body">
      <b-container class="dashboard p-4 text-center">
        <b-img-lazy src="/images/keycloak_logo.svg" fluid center alt="logo" />
      </b-container>
    </div>
    <!-- /.card-body -->
  </div>
  <!-- /.card -->

  <div class="card">
    <div class="card-header">
      <span class="fa fa-lock"></span> Access Token
    </div>
    <!-- /.card-header -->
    <div class="card-body">
      {{$keycloak.token}}
    </div>
    <!-- /.card-body -->
  </div>
  <!-- /.card -->

  <div class="card">
    <div class="card-header">
      <span class="fa fa-key"></span> Access Token Parsed
    </div>
    <!-- /.card-header -->
    <div class="card-body">
      {{$keycloak.tokenParsed}}
    </div>
    <!-- /.card-body -->
  </div>
  <!-- /.card -->
</div>
</template>

<script src="./dashboard.js"></script>
<style src="./dashboard.scss" lang="scss" scoped></style>
