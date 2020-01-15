import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import WrkfrcCoreCfExtn from './wrkfrc-core-cf-extn';
import WrkfrcCoreCfExtnDetail from './wrkfrc-core-cf-extn-detail';
import WrkfrcCoreCfExtnUpdate from './wrkfrc-core-cf-extn-update';
import WrkfrcCoreCfExtnDeleteDialog from './wrkfrc-core-cf-extn-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={WrkfrcCoreCfExtnDeleteDialog} />
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={WrkfrcCoreCfExtnUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={WrkfrcCoreCfExtnUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={WrkfrcCoreCfExtnDetail} />
      <ErrorBoundaryRoute path={match.url} component={WrkfrcCoreCfExtn} />
    </Switch>
  </>
);

export default Routes;
