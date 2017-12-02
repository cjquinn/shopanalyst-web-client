import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Button from './Button';
import Input from './Input';

const UpdateSettingsForm = ({ handleSubmit }) => (
    <form className="u-space-x2" onSubmit={handleSubmit}>
        <p className="u-color-help o-type-medium">Basic Info</p>

        <Field
            component={Input}
            name="email"
            placeholder="Enter your email..."
            type="email"
        />

        <p className="u-color-help o-type-medium">Update Your Password</p>

        <div className="u-space">
            <Field
                component={Input}
                name="current_password"
                placeholder="Enter your current password..."
                type="password"
            />

            <Field
                component={Input}
                name="new_password"
                placeholder="Enter your new password..."
                type="password"
            />
        </div>

        <Button>Save changes</Button>
    </form>
);

UpdateSettingsForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default UpdateSettingsForm;
