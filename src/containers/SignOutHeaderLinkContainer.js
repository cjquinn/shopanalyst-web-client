import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { signOut } from '../store/User/actions';

// Components
import SignOutHeaderLink from '../components/SignOutHeaderLink';

class SignOutHeaderLinkContainer extends Component {
    render() {
        return <SignOutHeaderLink handleSignOut={this.props.signOut} />;
    }
}

SignOutHeaderLinkContainer.propTypes = {
    signOut: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut())
});

export default connect(null, mapDispatchToProps)(SignOutHeaderLinkContainer);
