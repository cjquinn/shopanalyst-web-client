import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Button from './Button';
import Input from './Input';

const SignInForm = ({ handleSubmit, error }) => (
    <form className="u-space-x2" onSubmit={handleSubmit}>
        {error &&
            <p className="o-type-medium u-color-warning u-text-center">{error}</p>
        }
        
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
                placeholder="Enter your password..."
                type="password"
            />
        </div>

        <Button>Sign in</Button>
    </form>
);

SignInForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default SignInForm;
