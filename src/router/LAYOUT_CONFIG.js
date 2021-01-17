import { lazy } from 'react';

export const LAYOUT_CONFIG = [
  {
    path: '/home',
    title: '首页',
    component: lazy(() => import('@/pages/home/Home')),
  },
];

export default LAYOUT_CONFIG;
