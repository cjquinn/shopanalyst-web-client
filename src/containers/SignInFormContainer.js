import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// Actions
import { signIn } from '../store/User/actions';

// Components
import SignInForm from '../components/SignInForm';

class SignInFormContainer extends Component {
    handleSubmit = data => this.props.signIn(data);

    render() {
        return React.createElement(
            reduxForm({form: 'signIn'})(SignInForm),
            {onSubmit: this.handleSubmit}
        );
    }
}

SignInFormContainer.propTypes = {
    signIn: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    signIn: data => dispatch(signIn(data))
});

export default connect(null, mapDispatchToProps)(SignInFormContainer);
