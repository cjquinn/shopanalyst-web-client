import PropTypes from 'prop-types';
import React from 'react';

// Components
import Header from '../components/Header';
import Nav from '../components/Nav';

// Routes
import AuthorisedRoute from '../routes/AuthorisedRoute';
import UnauthorisedRoute from '../routes/UnauthorisedRoute';

// Screens
import ListsScreen from '../screens/ListsScreen';
import SignInScreen from '../screens/SignInScreen';

const AppLayout = ({ authorised }) => (
    <div className={`app ${!authorised && 'app--unauthorised u-bgcolor-pale-green'}`}>
        <Header />

        <UnauthorisedRoute path="/sign-in" component={SignInScreen} />

        <AuthorisedRoute path="/lists" component={ListsScreen} />

        {authorised && <Nav />}
    </div>
);

AppLayout.propTypes = {
    authorised: PropTypes.bool.isRequired
};

export default AppLayout;
