import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LAYOUT_CONFIG } from './LAYOUT_CONFIG';

export default function Routers() {
  return (
    <div>
      <Switch>
        {
          LAYOUT_CONFIG.map(item => {
            let { component: Component, path, title } = item;
            return (
              <Route path={path}>
                <Component title={title} />
              </Route>
            );
          });
        }
      </Switch>
    </div>
  )
}