<template>
<AppSidebar fixed>
  <SidebarHeader />
  <SidebarForm />
  <SidebarNav :navItems="navItems"></SidebarNav>
  <SidebarFooter />
  <SidebarMinimizer />
</AppSidebar>
</template>

<script src="./navigator.js"></script>
<style src="./navigator.scss" lang="scss" scoped></style>