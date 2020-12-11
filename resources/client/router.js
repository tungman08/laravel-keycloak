import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeComponent from './components/home/home.vue';
import MainComponent from './components/main/main.vue';
import DashboardComponent from './components/main/dashboard/dashboard.vue';
import ParentComponent from './components/main/parent/parent.vue';
import Child1Component from './components/main/parent/child1/child1.vue';
import Child2Component from './components/main/parent/child1/child2/child2.vue';
import FoodComponent from './components/main/food/food.vue';
import Page404Component from './components/error/page404.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeComponent
    },
    {
      path: '/main',
      component: MainComponent,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          redirect: 'dashboard'
        },
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: DashboardComponent,
        },
        {
          path: 'parent',
          meta: { label: 'Parent' },
          component: { render(child) { return child('router-view') } },
          children: [
            {
              path: '',
              component: ParentComponent,
            },
            {
              path: 'child1',
              meta: { label: 'Child1' },
              component: { render(child) { return child('router-view') } },
              children: [
                {
                  path: '',
                  component: Child1Component,
                },
                {
                  path: 'child2',
                  name: 'Child2',
                  component: Child2Component,
                },
              ]
            }
          ]
        },
        {
          path: 'food',
          name: 'Food',
          component: FoodComponent,
        }
      ]
    },
    {
      path: '*',
      name: 'Page404',
      component: Page404Component,
    }
  ]
});

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // We wait for Keycloak init, then we can call all methods safely
    while (!router.app.$keycloak.ready) {
      await sleep(100);
    }
    
    if (router.app.$keycloak.authenticated) {
      // allow to enter route
      next(); 
    } else {
      // go to login;
      const redirectUri = `${BASL_URL}${to.path}`;
      const keycloakLoginUrl = router.app.$keycloak.createLoginUrl({ redirectUri: redirectUri });
      window.location.replace(keycloakLoginUrl);
    }
  } else {
    next();
  }
});

export default router;
