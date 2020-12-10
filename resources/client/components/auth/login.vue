<template>
<div class="app flex-row align-items-center">
  <div class="container">
    <b-row class="justify-content-center">
      <b-col md="6">
        <b-card no-body class="p-4">
          <b-card-body>
            <b-form @submit.prevent="login">
              <h1>Login</h1>
              <p class="text-muted">Sign In to your account</p>
              <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text><span class="icon-user"></span></b-input-group-text>
                </b-input-group-prepend>
                <b-form-input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  autocomplete="off"
                  trim
                  v-model="username" 
                  :class="[{'is-invalid': errors.username}]"
                />
                <b-form-invalid-feedback v-if="errors.username" role="alert">
                  <strong>{{errors.username[0]}}</strong>
                </b-form-invalid-feedback>
              </b-input-group>
              <!-- /.input-group -->
              <b-input-group class="mb-4">
                <b-input-group-prepend>
                  <b-input-group-text><span class="icon-lock"></span></b-input-group-text>
                </b-input-group-prepend>
                <b-form-input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  autocomplete="off"
                  trim
                  v-model="password"
                  :class="[{'is-invalid': errors.password}]"
                />
                <b-form-invalid-feedback v-if="errors.password" role="alert">
                  <strong>{{errors.password[0]}}</strong>
                </b-form-invalid-feedback>
              </b-input-group>
              <!-- /.input-group -->
              <b-row>
                <b-col xs="6">
                  <b-button variant="primary" class="px-4" type="submit">Login</b-button>
                </b-col>
              </b-row>
            </b-form>
            <!-- /.form -->
          </b-card-body>
          <!-- /.card-body -->
        </b-card>
        <!-- /.card -->
      </b-col>
      <!-- /.col -->
    </b-row>
    <!-- /.row -->
  </div>
  <!-- /.container -->
</div>
</template>

<script src="./login.js"></script>
<style src="./login.scss" lang="scss" scoped></style>