import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// Actions
import { signUp } from '../../store/User/actions';

// Components
import SignUpForm from '../../components/Form/SignUpForm';

const SignUpReduxForm = reduxForm({form: 'signUp'})(SignUpForm);

class SignUpFormContainer extends Component {
    handleSubmit = data => this.props.signUp(data);

    render() {
        return (
            <SignUpReduxForm
                onSubmit={this.handleSubmit}
            />
        );
    }
}

SignUpFormContainer.propTypes = {
    signUp: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    signUp: data => dispatch(signUp(data))
});

export default connect(null, mapDispatchToProps)(SignUpFormContainer);
