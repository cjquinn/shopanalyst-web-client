import React from 'react';

// Components
import Template from '../components/shared/Template';

// Containers
import ResetPasswordFormContainer from '../containers/Form/ResetPasswordFormContainer';

const ResetPasswordScreen = () => (
    <Template>
        <p className="u-color-help u-text-center">
            Reset password
        </p>

        <ResetPasswordFormContainer />
    </Template>
);

export default ResetPasswordScreen;
