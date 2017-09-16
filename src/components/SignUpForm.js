import PropTypes from 'prop-types';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Components
import LabeledInput from './LabeledInput';

const SignUpForm = ({ handleSubmit }) => (
    <form className="u-space-2" onSubmit={handleSubmit}>
        <Field
            component={LabeledInput}
            id="input-email"
            inverted
            label="Email"
            name="email"
            placeholder="Enter your email..."
            type="email"
        />

        <Field
            component={LabeledInput}
            id="input-password"
            inverted
            label="Password"
            name="password"
            placeholder="Enter a password..."
            type="password"
        />

        <button className="o-button" type="submit">Sign up</button>
    </form>
);

SignUpForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({ form: 'signUp' })(SignUpForm);
