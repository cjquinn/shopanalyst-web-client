import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Template from '../components/shared/Template';

// Containers
import SignInFormContainer from '../containers/Form/SignInFormContainer';

const SignInScreen = () => (
    <Template>
        <p className="u-color-help u-text-center">
            Sign in <i>or</i> <Link className="c-link" to="/sign-up">sign up</Link>
        </p>

        <SignInFormContainer />

        <div className="u-text-right">
            <Link to="/request-password-reset" className="c-link o-type-medium">
                Forgotten password?
            </Link>
        </div>
    </Template>
);

export default SignInScreen;
