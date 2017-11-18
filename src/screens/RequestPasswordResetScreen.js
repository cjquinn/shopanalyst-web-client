import React from 'react';
import { Link } from 'react-router-dom';

// Components
import ScreenWrapper from '../components/ScreenWrapper';

// Containers
import RequestPasswordResetFormContainer from '../containers/RequestPasswordResetFormContainer';

const RequestPasswordResetScreen = () => (
    <ScreenWrapper>
        <p className="u-color-brown u-text-center">
            Request password reset
        </p>

        <RequestPasswordResetFormContainer />

        <Link to="/sign-in" className="o-link o-type-medium u-float-right">
            I remember my password
        </Link>
    </ScreenWrapper>
);

export default RequestPasswordResetScreen;
