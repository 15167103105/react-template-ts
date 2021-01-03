import React from 'react';
import Home from '@/pages/home/Home';

export const LAYOUT_CONFIG = [
  {
    path: '/home',
    title: '首页',
    component: () => <Home />,
  },
];

export default LAYOUT_CONFIG;