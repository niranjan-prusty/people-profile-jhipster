import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import WrkfrcCoreCf from './wrkfrc-core-cf';
import WrkfrcCoreCfDetail from './wrkfrc-core-cf-detail';
import WrkfrcCoreCfUpdate from './wrkfrc-core-cf-update';
import WrkfrcCoreCfDeleteDialog from './wrkfrc-core-cf-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={WrkfrcCoreCfDeleteDialog} />
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={WrkfrcCoreCfUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={WrkfrcCoreCfUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={WrkfrcCoreCfDetail} />
      <ErrorBoundaryRoute path={match.url} component={WrkfrcCoreCf} />
    </Switch>
  </>
);

export default Routes;
