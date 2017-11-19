import React from 'react';

// Components
import ScreenWrapper from '../components/ScreenWrapper';

// Containers
import ResetPasswordFormContainer from '../containers/ResetPasswordFormContainer';

const ResetPassword = () => (
    <ScreenWrapper>
        <p className="u-color-brown u-text-center">
            Reset password
        </p>

        <ResetPasswordFormContainer />
    </ScreenWrapper>
);

export default ResetPassword;
