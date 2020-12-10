import HeaderComponent from './layout/header/header.vue';
import NavigatorComponent from './layout/navigator/navigator.vue';
import BreadcrumbComponent from './layout/breadcrumb/breadcrumb.vue';
import AsideComponent from './layout/aside/aside.vue';
import FooterComponent from './layout/footer/footer.vue';

export default {
  name: 'MainComponent',
  components: {
    'app-layout-header': HeaderComponent,
    'app-layout-navigator': NavigatorComponent,
    'app-layout-breadcrumb': BreadcrumbComponent,
    'app-layout-aside': AsideComponent,
    'app-layout-footer': FooterComponent,
  },
};
