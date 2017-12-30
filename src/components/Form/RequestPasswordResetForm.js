import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Button from '../shared/Button';
import Input from '../shared/Input';
import Loading from '../shared/Loading';

const RequestPasswordResetForm = ({ handleSubmit, submitting }) => (
    <form className="u-space-x2" onSubmit={handleSubmit}>
        <Field
            component={Input}
            name="email"
            placeholder="Enter your email..."
            type="email"
        />

        <Button>
            {submitting ? <Loading /> : 'Request password reset'}
        </Button>
    </form>
);

RequestPasswordResetForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
};

export default RequestPasswordResetForm;
