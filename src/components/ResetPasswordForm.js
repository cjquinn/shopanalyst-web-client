import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Button from './Button';
import Input from './Input';
import Loading from './Loading';

const ResetPasswordForm = ({ handleSubmit, submitting }) => (
    <form className="u-space-x2" onSubmit={handleSubmit}>
        <Field
            component={Input}
            name="password"
            placeholder="Enter a password..."
            type="password"
        />

        <Button>
            {submitting ? <Loading /> : 'Reset password'}
        </Button>
    </form>
);

ResetPasswordForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
};

export default ResetPasswordForm;
