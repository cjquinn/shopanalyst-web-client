import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
// import { signIn } from '../store/User/actions';

// Components
import SignInForm from '../components/SignInForm';

class SignInFormContainer extends Component {
    handleSubmit = data => null;

    render() {
        return <SignInForm onSubmit={this.handleSubmit} />;
    }
}

SignInFormContainer.propTypes = {
    signIn: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    signIn: data => null
});

export default connect(null, mapDispatchToProps)(SignInFormContainer);
