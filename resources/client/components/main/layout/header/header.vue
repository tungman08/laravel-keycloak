<template>
<AppHeader fixed>
  <SidebarToggler class="d-lg-none" display="md" mobile />
  <b-link class="navbar-brand" to="/">
    <img class="navbar-brand-full" src="img/brand/logo.svg" width="89" height="25" alt="Laravel 8">
    <img class="navbar-brand-minimized" src="img/brand/sygnet.svg" width="30" height="30" alt="Laravel 8">
  </b-link>
  <SidebarToggler class="d-md-down-none" display="lg" />
  <b-navbar-nav class="d-md-down-none ml-auto">
    <b-nav-item class="d-md-down-none">
      <AppHeaderDropdown right no-caret>
        <template slot="header">
          <b-icon icon="power"></b-icon>
        </template>
        <template slot="dropdown">
          <a class="dropdown-item" href="javascript:void(0)" style="min-width: 160px;" @click="onLogout">
            <b-icon icon="lock"></b-icon> Logout
          </a>
        </template>
      </AppHeaderDropdown>
    </b-nav-item>
  </b-navbar-nav>
  <AsideToggler class="d-none d-lg-block" />
</AppHeader>
</template>

<script src="./header.js"></script>
<style src="./header.scss" lang="scss" scoped></style>