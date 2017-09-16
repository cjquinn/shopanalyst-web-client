import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';
import { Redirect, Switch } from 'react-router-dom';

// Components
import Nav from '../components/Nav';
import Svg from '../components/Svg';

// Routes
import AuthorisedRoute from '../routes/AuthorisedRoute';
import UnauthorisedRoute from '../routes/UnauthorisedRoute';

// Screens
import AnalyseScreen from '../screens/AnalyseScreen';
import ListsScreen from '../screens/ListsScreen';
import ListScreen from '../screens/ListScreen';
import RequestPasswordResetScreen from '../screens/RequestPasswordResetScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

// Sprites
import shop from '../assets/svg/shop.svg';

const AppLayout = ({ isAuthorised, isFetching, location }) => (
    <div className={`app ${!isAuthorised && 'app--unauthorised u-bgcolor-pale-green'} ${isFetching && 'app--loading'} ${location.pathname.indexOf('edit') !== -1 && 'app--edit-list'}`}>
        {isFetching &&
            <div className="u-space u-text-center">
                <Svg sprite={shop} />
                <p>Loading...</p>
            </div>
        }

        {!isFetching &&
            <Switch>
                <Redirect exact from="/" to="/lists" />

                <UnauthorisedRoute exact path="/sign-in" component={SignInScreen} />
                <UnauthorisedRoute exact path="/sign-up" component={SignUpScreen} />

                <UnauthorisedRoute exact path="/request-password-reset" component={RequestPasswordResetScreen} />
                <UnauthorisedRoute exact path="/reset-password" component={ResetPasswordScreen} />

                <AuthorisedRoute exact path="/analyse" component={AnalyseScreen} />

                <AuthorisedRoute path="/lists/:id(\d+)" component={ListScreen} />
                <AuthorisedRoute path="/lists" component={ListsScreen} />

                <AuthorisedRoute exact path="/settings" component={SettingsScreen} />
            </Switch>
        }

        {isAuthorised && <Nav />}
    </div>
);

AppLayout.propTypes = {
    isAuthorised: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired
};

export default withRouter(AppLayout);
