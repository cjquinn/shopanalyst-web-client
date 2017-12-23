import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Button from './Button';
import Input from './Input';
import Loading from './Loading';

const SignUpForm = ({ handleSubmit, submitting }) => (
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

        <Button>
            {submitting ? <Loading /> : 'Sign up'}
        </Button>
    </form>
);

SignUpForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
};

export default SignUpForm;
