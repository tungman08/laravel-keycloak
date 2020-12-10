import {
  Header as AppHeader,
  HeaderDropdown as AppHeaderDropdown,
  SidebarToggler,
  AsideToggler,
} from '@coreui/vue';

export default {
  name: 'HeaderComponent',
  components: {
    AppHeader,
    AppHeaderDropdown,
    SidebarToggler,
    AsideToggler,
  },
  methods:{
    onLogout() {
      this.$swal.fire({
        title: 'ออกจากระบบ!',
        text: 'คุณต้องการออกจากระบบใช่หรือไม่?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'ใช่',
        cancelButtonText: 'ไม่ใช่',
        confirmButtonColor: '#f64846',
        focusConfirm: false,
        focusCancel: true
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.replace(this.$keycloak.createLogoutUrl({redirectUri: `${BASL_URL}`}));
        }
      });
    }
  }
};
