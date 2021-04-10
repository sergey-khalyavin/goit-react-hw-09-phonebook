import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import Layout from './Layout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import routes from '../routes';
import { authOperations } from '../redux/auth';

const AsyncHomeViews = lazy(() =>
  import('../views/HomeViews.js' /* webpackChunkName: "home-page" */),
);
const AsyncContactsViews = lazy(() =>
  import('../views/ContactsViews.js' /* webpackChunkName: "contacts-page" */),
);
const AsyncLoginView = lazy(() =>
  import('../views/LoginView.js' /* webpackChunkName: "login-page" */),
);
const AsyncRegisterView = lazy(() =>
  import('../views/RegisterView.js' /* webpackChunkName: "register-page" */),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <PublicRoute
                path={routes.home}
                exact
                component={AsyncHomeViews}
                register={false}
              />
              <PrivateRoute
                path={routes.contacts}
                component={AsyncContactsViews}
                exact
              />
              <PublicRoute
                path={routes.login}
                exact
                component={AsyncLoginView}
                register={true}
              />
              <PublicRoute
                path={routes.register}
                exact
                component={AsyncRegisterView}
                register={true}
              />

              <Redirect to={routes.home} />
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
