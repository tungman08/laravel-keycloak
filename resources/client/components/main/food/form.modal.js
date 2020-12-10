export default {
  name: 'FormModal',
  props: {
    title: String,
    food: Object,
  },
  data() {
    return {
      mode: '',
      form: {
        name: ''
      },
      errors: {}
    };
  },
  methods: {
    show() {
      this.mode = (this.food.id) ? 'แก้ไข' : 'เพิ่ม';
      this.form.name = this.food.name;
      this.$refs['form-model'].show();
    },
    clear() {
      this.mode = '';
      this.form.name = '';
      this.errors = {};
    },
    submit(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.food.name = this.form.name;

      const action = (this.mode === 'เพิ่ม') ? 'food/add' : 'food/edit';
      this.$store.dispatch(action, this.food)
        .then(
          () => {
            this.$toastr.s(`${this.mode} '${this.food.name}' เรียบร้อย`, 'สำเร็จ!');
            this.$nextTick(() => {
              this.$refs['form-model'].hide();
            });
          },
          (error) => {
            switch (error.status) {
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
}