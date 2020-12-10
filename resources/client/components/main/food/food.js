import { mapGetters, mapActions } from 'vuex';
import FormModal from './form.modal.vue';

export default {
  name: 'FoodComponent',
  components: {
    'form-modal': FormModal
  },
  data() {
    return {
      loading: false,
      title: '',
      food: {}
    };
  },
  mounted() {
    this.loading = true;
    this.fetchFood();
  },
  computed: {
    ...mapGetters('food', {
      foods: 'foods'
    })
  },
  methods: {
    ...mapActions('food', {
      fetch: 'fetch',
      remove: 'remove'
    }),
    fetchFood() {
      this.fetch()            
        .then(
          () => this.loading = false,
          (error) => this.failure(error)
        );
    },
    addFood() {
      this.title = 'เพิ่มอาหาร';
      this.food = {};
      this.$nextTick(() => {
        this.$refs['form-modal'].show();
      });
    },
    showFood(food) {
      this.$swal.fire({
        title: 'รายละเอียด',
        text: `ชื่อ: ${food.name}`,
        icon: 'info',
        confirmButtonText: 'ปิด',
      })
    },
    editFood(food) {
      this.title = `แก้ไข ${food.name}`;
      this.food = food;
      this.$nextTick(() => {
        this.$refs['form-modal'].show();
      });
    },
    removeFood(food, index) {
      this.$swal.fire({
        title: 'ลบอาหาร!',
        text: `คุณต้องการลบ '${food.name}' ใช่หรือไม่?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'ใช่',
        cancelButtonText: 'ไม่ใช่',
        confirmButtonColor: '#f64846',
        focusConfirm: false,
        focusCancel: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.remove({ index: index, id: food.id })
            .then(
              () => this.$toastr.s(`ลบ '${food.name}' เรียบร้อย`, 'สำเร็จ!'),
              (error) => this.failure(error)
            );
        }
      });
    },
    failure(error) {
      this.$swal.fire({
        title: error.statusText,
        text: `ERROR ${error.status}: ${error.data.message}`,
        icon: 'error',
        confirmButtonText: 'ปิด',
        confirmButtonColor: '#f64846'
      });
    }
  }
};
