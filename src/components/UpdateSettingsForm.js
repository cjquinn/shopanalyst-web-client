import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import LabeledInput from './LabeledInput';

const UpdateSettingsForm = ({ handleSubmit }) => (
    <form className="u-space-2" onSubmit={handleSubmit}>
        <h2 className="u-color-brown o-type-medium u-uppercase u-weight-normal">
            Basic Info
        </h2>

        <Field
            component={LabeledInput}
            id="email-input"
            inverted
            label="Email"
            name="email"
            placeholder="Enter your email..."
            type="email"
        />

        <h2 className="u-color-brown o-type-medium u-uppercase u-weight-normal">
            Update Your Password
        </h2>

        <Field
            component={LabeledInput}
            id="current-password-input"
            inverted
            label="Current password"
            name="current_password"
            placeholder="Enter your current password..."
            type="password"
        />

        <Field
            component={LabeledInput}
            id="new-password-input"
            inverted
            label="New password"
            name="new_password"
            placeholder="Enter your new password..."
            type="password"
        />

        <button className="o-button" type="submit">Save changes</button>
    </form>
);

UpdateSettingsForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default UpdateSettingsForm;
