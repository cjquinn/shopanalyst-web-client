import PropTypes from 'prop-types';
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

// Components
import Splash from '../components/Splash';

// Containers
import ListScreenContainer from '../containers/ListScreenContainer';

// Routes
import AuthorisedRoute from '../routes/AuthorisedRoute';
import UnauthorisedRoute from '../routes/UnauthorisedRoute';

// Screens
import AnalyseScreen from '../screens/AnalyseScreen';
import CreateListScreen from '../screens/CreateListScreen';
import ListsScreen from '../screens/ListsScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import RequestPasswordResetScreen from '../screens/RequestPasswordResetScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const AppLayout = ({ isFetching }) => (
    <div className="app">
        {isFetching && <Splash>Loading...</Splash>}

        {!isFetching &&
            <Switch>
                <Redirect exact from="/" to="/lists" />

                <UnauthorisedRoute exact path="/sign-in" component={SignInScreen} />
                <UnauthorisedRoute exact path="/sign-up" component={SignUpScreen} />

                <UnauthorisedRoute exact path="/request-password-reset" component={RequestPasswordResetScreen} />
                <UnauthorisedRoute exact path="/reset-password" component={ResetPasswordScreen} />

                <AuthorisedRoute exact path="/analyse" component={AnalyseScreen} />

                <AuthorisedRoute exact path="/lists" component={ListsScreen} />
                <AuthorisedRoute exact path="/create-list" component={CreateListScreen} />

                <AuthorisedRoute path="/lists/:id(\d+)" component={ListScreenContainer} />

                <AuthorisedRoute exact path="/settings" component={SettingsScreen} />

                <Route component={NotFoundScreen} />
            </Switch>
        }
    </div>
);

AppLayout.propTypes = {
    isFetching: PropTypes.bool.isRequired
};

export default AppLayout;
