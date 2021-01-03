import React from 'react';
import Detail from '@/pages/detail/Detail';
import NotFound from '@/pages/notFound/NotFound';

export const CONFIG = [
  {
    path: '/detail',
    title: '详情',
    component: () => <Detail />,
  },
  {
    path: '/not_found',
    title: '页面不存在',
    component: () => <NotFound />,
  },
];

export default CONFIG;