/* eslint-disable no-tabs */
import React, { Suspense } from 'react';
import {
  Switch, Route, Redirect, BrowserRouter as Router,
} from 'react-router-dom';
import { LAYOUT_CONFIG } from '@/router/LAYOUT_CONFIG';
import { CONFIG } from '@/router/CONFIG';
import NotFound from '@/pages/notFound/NotFound';

export default function Routers() {
  return (
    <Router>
      <Suspense fallback={<div> Loading... </div>}>
        <Switch>
          <Redirect exact from="/" to="/home" />
          {
            LAYOUT_CONFIG.map((item) => {
              let { component: Component, path, title } = item;
              return (
                <Route path={path} title={title} key={item.path} component={Component} />
              );
            })
          }
          {
            CONFIG.map((item) => {
              let { component: Component, path, title } = item;
              return (
                <Route path={path} component={Component} title={title} key={item.path} />
              );
            })
          }
          <Route component={NotFound} />
        </Switch>
			</Suspense>
    </Router>
  );
}
