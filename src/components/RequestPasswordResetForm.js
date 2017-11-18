import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import LabeledInput from './LabeledInput';

const RequestPasswordResetForm = ({ handleSubmit }) => (
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

        <button className="o-button" type="submit">
            Request password reset
        </button>
    </form>
);

RequestPasswordResetForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default RequestPasswordResetForm;
