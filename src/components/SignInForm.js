import PropTypes from 'prop-types';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Components
import LabeledInput from './LabeledInput';

const SignUpForm = ({ handleSubmit }) => (
    <form className="u-space-2" onSubmit={handleSubmit}>
        <Field
            component={LabeledInput}
            inverted
            label="Email"
            name="email"
            placeholder="Enter your email..."
            type="email"
        />

        <Field
            component={LabeledInput}
            inverted
            label="Password"
            name="password"
            placeholder="Enter your password..."
            type="password"
        />

        <button className="o-button" type="button">Sign in</button>
    </form>
);

SignUpForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({ form: 'signIn' })(SignUpForm);
