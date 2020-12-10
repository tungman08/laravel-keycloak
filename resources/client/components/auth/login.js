import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'LoginComponent',
  data() {
    return {
      username: '',
      password: '',
      errors: {}
    };
  },
  mounted() {
    if (this.isAuthen) {
      this.$router.push('/main/dashboard');
    }
  },
  computed: {
    ...mapGetters('auth', {
      isAuthen: 'isAuthen'
    })
  },
  methods:{
    ...mapActions('auth', {
      authLogin: 'login'
    }),
    login() {
      const credential = { 
        username: this.username,
        password: this.password
      };

      this.authLogin(credential)
        .then(
          () => this.$router.push('/main/dashboard'),
          (error) => {
            switch (error.status) {
              case 401:
                this.$toastr.e(error.data.message, 'เกิดข้อผิดพลาด!');
                break;
              case 422:
                this.errors = error.data.errors;
                break;
              case 500:
                this.$swal.fire({
                  title: error.statusText,
                  text: `ERROR ${error.status}: ${error.data.message}`,
                  icon: 'error',
                  confirmButtonText: 'ปิด',
                  confirmButtonColor: '#f64846'
                });
                break;
            }
          }
        );
    }
  }
};
