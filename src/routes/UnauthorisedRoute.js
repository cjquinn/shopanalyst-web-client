import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class UnauthorisedRoute extends Component {
    render() {
        const { component: Component, ...rest } = this.props;

        return (
            <Route {...rest} render={matchProps => (
                <Component {...matchProps} />
            )} />
        );
    }
}

UnauthorisedRoute.propTypes = {
    component: PropTypes.func.isRequired
};

export default UnauthorisedRoute;
