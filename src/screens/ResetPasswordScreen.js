import React from 'react';

// Components
import LabeledInput from '../components/LabeledInput';
import ScreenWrapper from '../components/ScreenWrapper';

const ResetPassword = () => (
    <ScreenWrapper>
        <p className="u-color-brown u-text-center">
            Reset password
        </p>

        <LabeledInput
            inverted
            label="Password"
            name="password"
            placeholder="Enter a password..."
            type="password"
        />

        <button className="o-button" type="button">Reset password</button>
    </ScreenWrapper>
);

export default ResetPassword;
