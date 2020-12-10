import { Breadcrumb } from '@coreui/vue';

export default {
  name: 'BreadcrumbComponent',
  components: {
    Breadcrumb,
  },
  computed: {
    name() {
      return this.$route.name;
    },
    list() {
      return this.$route.matched.filter(
        (route) => route.name || route.meta.label
      );
    },
  },
};
