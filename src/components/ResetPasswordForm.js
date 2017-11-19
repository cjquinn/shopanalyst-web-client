import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import LabeledInput from './LabeledInput';

const ResetPasswordForm = ({ handleSubmit }) => (
    <form className="u-space-2" onSubmit={handleSubmit}>
        <Field
            component={LabeledInput}
            id="input-password"
            inverted
            label="Password"
            name="password"
            placeholder="Enter a password..."
            type="password"
        />

        <button className="o-button" type="submit">
            Reset password
        </button>
    </form>
);

ResetPasswordForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default ResetPasswordForm;
