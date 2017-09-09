import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components
import Header from '../components/Header';

class UnauthorisedRoute extends Component {
    render() {
        const { component: Component, ...rest } = this.props;

        return (
            <Route {...rest} render={matchProps => (
                <div>
                    <Header>Shopanalyst</Header>
                    
                    <Component {...matchProps} />
                </div>
            )} />
        );
    }
}

UnauthorisedRoute.propTypes = {
    component: PropTypes.func.isRequired
};

export default UnauthorisedRoute;
