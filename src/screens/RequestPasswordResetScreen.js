import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Template from '../components/shared/Template';

// Containers
import RequestPasswordResetFormContainer from '../containers/Form/RequestPasswordResetFormContainer';

const RequestPasswordResetScreen = () => (
    <Template>
        <p className="u-color-help u-text-center">
            Request password reset
        </p>

        <RequestPasswordResetFormContainer />

        <div className="u-text-right">
            <Link to="/sign-in" className="c-link o-type-medium">
                I remember my password
            </Link>
        </div>
    </Template>
);

export default RequestPasswordResetScreen;
