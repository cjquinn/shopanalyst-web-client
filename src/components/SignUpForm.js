import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Button from './Button';
import Input from './Input';

const SignUpForm = ({ handleSubmit }) => (
    <form className="u-space-x2" onSubmit={handleSubmit}>
        <div className="u-space">
            <Field
                component={Input}
                name="email"
                placeholder="Enter your email..."
                type="email"
            />

            <Field
                component={Input}
                name="password"
                placeholder="Enter a password..."
                type="password"
            />
        </div>

        <Button>Sign up</Button>
    </form>
);

SignUpForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default SignUpForm;
