import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';

const Auth = ({ component: Component, ...rest }) => (
    <Route {...rest} render={matchProps => (
        <div className="app app--auth u-bgcolor-pale-green">
            <Component {...matchProps} />
        </div>
    )} />
);

Auth.propTypes = {
    component: PropTypes.node.isRequired
};

export default Auth;
