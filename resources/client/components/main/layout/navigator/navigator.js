import {
  Sidebar as AppSidebar,
  SidebarFooter,
  SidebarForm,
  SidebarHeader,
  SidebarMinimizer,
  SidebarNav,
} from '@coreui/vue';

export default {
  name: 'NavigatorComponent',
  components: {
    AppSidebar,
    SidebarForm,
    SidebarFooter,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer,
  },
  data() {
    return {
      navItems: [
        {
          name: 'Dashboard',
          url: '/main/dashboard',
          icon: 'fa fa-tachometer-alt',
        },
        {
          name: 'Parent',
          url: '/main/parent',
          icon: 'fa fa-user',
        },
        {
          name: 'Food',
          url: '/main/food',
          icon: 'fa fa-drumstick-bite',
        },
      ],
    };
  },
};
