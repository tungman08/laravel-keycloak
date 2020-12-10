import Vue from 'vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import VueKeyCloak from '@dsb-norge/vue-keycloak-js';
import VueAxios from 'vue-axios';
import VueSweetalert2 from 'vue-sweetalert2';
import VueToastr from 'vue-toastr';
import axios from 'axios';
import router from './router';
import store from './vuex/store';
import LoadingComponent from './components/shared/loading/loading.vue';

window.BASL_URL = document.getElementsByTagName('base')[0].href;

Vue.use(VueAxios, axios);
Vue.use(VueSweetalert2);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueToastr, { defaultPosition: "toast-bottom-right" });
Vue.use(VueKeyCloak, {
  init: { onLoad: 'check-sso' },
  config: {
    url: 'https://ois-authen.totcloud.com/auth',
    realm: 'ems',
    clientId: 'tungman'
  },
  onReady: (kc) => {
    new Vue({
      store,
      router,
    }).$mount('#app');
  }
});

Vue.component('loading', LoadingComponent);
