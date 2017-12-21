import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

// Selectors
import { getIsAuthorised } from '../store/User/selectors';

class AuthorisedRoute extends Component {
    render() {
        const { component: Component, isAuthorised, ...rest } = this.props;

        return !isAuthorised
            ? <Redirect exact to="/sign-in" />
            : (
                <Route {...rest} render={matchProps => (
                    <Component {...matchProps} />
                )} />
            );
    }
}

AuthorisedRoute.propTypes = {
    isAuthorised: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    isAuthorised: getIsAuthorised(state)
});

export default connect(mapStateToProps)(AuthorisedRoute);
