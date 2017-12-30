import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router';

// Components
import Nav from '../../components/shared/Nav';

class NavContainer extends Component {
    getClasses = tab =>
        this.props.location.pathname.indexOf(tab) !== -1
            ? 'u-bgcolor-foreground'
            : 'u-bgcolor-background';

    render() {
        return <Nav getClasses={this.getClasses} />;
    }
}

NavContainer.propTypes = {
    location: PropTypes.object.isRequired
};

export default withRouter(NavContainer);
