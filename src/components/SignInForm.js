import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import LabeledInput from './LabeledInput';

const SignInForm = ({ handleSubmit, error }) => (
    <form className="u-space-2" onSubmit={handleSubmit}>
        <Field
            component={LabeledInput}
            id="email-input"
            inverted
            label="Email"
            name="email"
            placeholder="Enter your email..."
            type="email"
        />

        <Field
            component={LabeledInput}
            id="password-input"
            inverted
            label="Password"
            name="password"
            placeholder="Enter your password..."
            type="password"
        />

        {error &&
            <p className="o-type-medium u-color-red u-text-center">{error}</p>
        }

        <button className="o-button" type="submit">Sign in</button>
    </form>
);

SignInForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default SignInForm;
