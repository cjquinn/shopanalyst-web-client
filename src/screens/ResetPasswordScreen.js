import React from 'react';

// Components
import Template from '../components/Template';

// Containers
import ResetPasswordFormContainer from '../containers/ResetPasswordFormContainer';

const ResetPassword = () => (
    <Template>
        <p className="u-color-help u-text-center">
            Reset password
        </p>

        <ResetPasswordFormContainer />
    </Template>
);

export default ResetPassword;
