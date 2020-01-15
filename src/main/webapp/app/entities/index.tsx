import React from 'react';
import { Switch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import WrkfrcCoreCf from './PeopleProfileMicroservices/wrkfrc-core-cf';
import WrkfrcCoreCfExtn from './PeopleProfileMicroservices/wrkfrc-core-cf-extn';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <ErrorBoundaryRoute path={`${match.url}wrkfrc-core-cf`} component={WrkfrcCoreCf} />
      <ErrorBoundaryRoute path={`${match.url}wrkfrc-core-cf-extn`} component={WrkfrcCoreCfExtn} />
      {/* jhipster-needle-add-route-path - JHipster will add routes here */}
    </Switch>
  </div>
);

export default Routes;
