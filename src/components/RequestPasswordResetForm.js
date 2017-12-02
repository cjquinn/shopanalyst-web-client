import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Button from './Button';
import Input from './Input';

const RequestPasswordResetForm = ({ handleSubmit }) => (
    <form className="u-space-x2" onSubmit={handleSubmit}>
        <Field
            component={Input}
            name="email"
            placeholder="Enter your email..."
            type="email"
        />

        <Button>Request password reset</Button>
    </form>
);

RequestPasswordResetForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default RequestPasswordResetForm;
