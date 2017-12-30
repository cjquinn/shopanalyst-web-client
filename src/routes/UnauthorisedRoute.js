import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import HeaderTitle from '../components/Header/HeaderTitle';
import HeaderWrapper from '../components/Header/HeaderWrapper';
import Template from '../components/shared/Template';
import UnauthorisedScreenWrapper from '../components/shared/UnauthorisedScreenWrapper';

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
                        <HeaderWrapper>
                            <HeaderTitle>Shopanalyst</HeaderTitle>
                        </HeaderWrapper>

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
