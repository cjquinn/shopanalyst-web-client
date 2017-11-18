import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router';

// Components
import Nav from '../components/Nav';

class NavContainer extends Component {
    getClasses = tab =>
        this.props.location.pathname.indexOf(tab) !== -1
            ? 'tabs__tab--active u-bgcolor-off-white'
            : 'u-bgcolor-pale-grey';

    render() {
        return <Nav getClasses={this.getClasses} />;
    }
}

NavContainer.propTypes = {
    location: PropTypes.object.isRequired
};

export default withRouter(NavContainer);
