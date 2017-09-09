import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

// Components
import Header from '../components/Header';
import Nav from '../components/Nav';

// Routes
import AuthorisedRoute from '../routes/AuthorisedRoute';
import UnauthorisedRoute from '../routes/UnauthorisedRoute';

// Screens
import ListsScreen from '../screens/ListsScreen';
import ListScreen from '../screens/ListScreen';
import RequestPasswordResetScreen from '../screens/RequestPasswordResetScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const AppLayout = ({ authorised }) => (
    <div className={`app ${!authorised && 'app--unauthorised u-bgcolor-pale-green'}`}>
        <Header />

        <Switch>
            <Redirect exact from="/" to="/lists" />

            <UnauthorisedRoute exact path="/sign-in" component={SignInScreen} />
            <UnauthorisedRoute exact path="/sign-up" component={SignUpScreen} />

            <UnauthorisedRoute exact path="/request-password-reset" component={RequestPasswordResetScreen} />
            <UnauthorisedRoute exact path="/reset-password" component={ResetPasswordScreen} />

            <AuthorisedRoute path="/lists/:id(\d+)" component={ListScreen} />
            <AuthorisedRoute path="/lists" component={ListsScreen} />

            <AuthorisedRoute exact path="/settings" component={SettingsScreen} />
        </Switch>

        {authorised && <Nav />}
    </div>
);

AppLayout.propTypes = {
    authorised: PropTypes.bool.isRequired
};

export default AppLayout;
