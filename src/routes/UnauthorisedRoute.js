import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import Header from '../components/Header';
import Svg from '../components/Svg';

// Selectors
import { getIsAuthorised } from '../store/User/selectors';

// Sprites
import logo from '../assets/svg/logo.svg';

class UnauthorisedRoute extends Component {
    render() {
        const { component: Component, isAuthorised, ...rest } = this.props;

        return isAuthorised
            ? <Redirect exact to="/lists" />
            : (
                <Route {...rest} render={matchProps => (
                    <div>
                        <Header>Shopanalyst</Header>

                        <div className="u-mt-2 u-text-center">
                            <Svg sprite={logo} />
                        </div>

                        <Component {...matchProps} />
                    </div>
                )} />
            );
    }
}

UnauthorisedRoute.propTypes = {
    isAuthorised: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    isAuthorised: getIsAuthorised(state)
});

export default connect(mapStateToProps)(UnauthorisedRoute);
