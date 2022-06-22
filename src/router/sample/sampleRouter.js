const sampleRouter = [
  { path: '', component: () => import('pages/sample/Dashboard.vue') },
  { path: '/Dashboard2', component: () => import('pages/sample/Dashboard2.vue') },
  { path: '/Profile', component: () => import('pages/sample/UserProfile.vue') },
  { path: '/Map', component: () => import('pages/sample/Map.vue') },
  { path: '/MapMarker', component: () => import('pages/sample/MapMarker.vue') },
  { path: '/TreeTable', component: () => import('pages/sample/TreeTable.vue') },
  { path: '/StreetView', component: () => import('pages/sample/StreetView.vue') },
  { path: '/Cards', component: () => import('pages/sample/Cards.vue') },
  { path: '/Tables', component: () => import('pages/sample/Tables.vue') },
  { path: '/Contact', component: () => import('pages/sample/Contact.vue') },
  { path: '/Checkout', component: () => import('pages/sample/Checkout.vue') },
  {
    path: '/Ecommerce',
    component: () => import('pages/sample/ProductCatalogues.vue'),
  },
  { path: '/Pagination', component: () => import('pages/sample/Pagination.vue') },
  { path: '/Charts', component: () => import('pages/sample/Charts.vue') },
  { path: '/Calendar', component: () => import('pages/sample/Calendar.vue') },
  { path: '/Directory', component: () => import('pages/sample/Directory.vue') },
  { path: '/Footer', component: () => import('pages/sample/Footer.vue') },
  { path: '/CardHeader', component: () => import('pages/sample/CardHeader.vue') },
];

export default sampleRouter;
