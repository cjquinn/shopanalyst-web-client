import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import Header from '../components/Header';
import HeaderTitle from '../components/HeaderTitle';
import Template from '../components/Template';
import UnauthorisedScreenWrapper from '../components/UnauthorisedScreenWrapper';

// Selectors
import { getIsAuthorised } from '../store/User/selectors';

class UnauthorisedRoute extends Component {
    render() {
        const { component: Component, isAuthorised, ...rest } = this.props;

        return isAuthorised
            ? <Redirect exact to="/lists" />
            : (
                <Route {...rest} render={matchProps => (
                    <Template>
                        <Header>
                            <HeaderTitle>Shopanalyst</HeaderTitle>
                        </Header>

                        <UnauthorisedScreenWrapper>
                            <Component {...matchProps} />
                        </UnauthorisedScreenWrapper>
                    </Template>
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
