import { lazy } from 'react';

export const CONFIG = [
  {
    path: '/detail',
    title: '详情',
    component: lazy(() => import('@/pages/detail/Detail')),
  },
  {
    path: '/not_found',
    title: '页面不存在',
    component: lazy(() => import('@/pages/notFound/NotFound')),
  },
];

export default CONFIG;
