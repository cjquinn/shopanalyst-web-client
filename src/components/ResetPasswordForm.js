import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Button from './Button';
import Input from './Input';

const ResetPasswordForm = ({ handleSubmit }) => (
    <form className="u-space-x2" onSubmit={handleSubmit}>
        <Field
            component={Input}
            name="password"
            placeholder="Enter a password..."
            type="password"
        />

        <Button>Reset password</Button>
    </form>
);

ResetPasswordForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default ResetPasswordForm;
