import nftRouter from '@router/nft/nftRouter';
import sampleRouter from '@router/sample/sampleRouter';

const requireAuth = (to, from, next) => {
  const isAuth = localStorage.getItem('token');
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`;
  if (isAuth) {
    next();
  } else {
    next(loginPath);
  }
  // isAuth ? next() : next(loginPath);
};

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    beforeEnter: requireAuth,
    children: [
      ...sampleRouter,
      ...nftRouter,

      // Not completed yet
      // {path: '/Taskboard', component: () => import('pages/TaskBoard.vue')},
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/sample/Error404.vue'),
  },
  {
    path: '/Mail',
    component: () => import('layouts/Mail.vue'),
  },
  {
    path: '/Maintenance',
    component: () => import('src/pages/sample/Maintenance.vue'),
  },
  {
    path: '/Pricing',
    component: () => import('src/pages/sample/Pricing.vue'),
  },
  {
    path: '/Login',
    component: () => import('src/pages/sample/Login.vue'),
  },
  {
    path: '/signup',
    component: () => import('src/pages/sample/Signup.vue'),
  },
  {
    path: '/Lock',
    component: () => import('src/pages/sample/LockScreen.vue'),
  },
  {
    path: '/Lock-2',
    component: () => import('src/pages/sample/LockScreen-2.vue'),
  },
];

export default routes;
