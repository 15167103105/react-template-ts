import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { LAYOUT_CONFIG } from '@/router/LAYOUT_CONFIG';
import { CONFIG } from '@/router/CONFIG';
import NotFound from '@/pages/notFound/NotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
      <Redirect exact from="/" to="/home" />
        {
          LAYOUT_CONFIG.map(item => {
            let { component: Component, path, title } = item;
            return (
              <Route path={path} component={Component} title={title} key={item.path} />
            );
          })
        }
        {
          CONFIG.map(item => {
            let { component: Component, path, title } = item;
            return (
              <Route path={path} component={Component} title={title} key={item.path} />
            );
          })
        }
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}