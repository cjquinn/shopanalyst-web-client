import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { signOut } from '../store/User/actions';

// Components
import SignOutLink from '../components/SignOutLink';

class SignOutLinkContainer extends Component {
    render() {
        return <SignOutLink handleClick={this.props.signOut} />;
    }
}

SignOutLinkContainer.propTypes = {
    signOut: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut())
});

export default connect(null, mapDispatchToProps)(SignOutLinkContainer);
