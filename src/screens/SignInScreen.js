import React from 'react';
import { Link } from 'react-router-dom';

// Components
import ScreenWrapper from '../components/ScreenWrapper';

// Containers
import SignInFormContainer from '../containers/SignInFormContainer';

const SignInScreen = () => (
    <ScreenWrapper>
        <p className="u-color-brown u-text-center">
            Sign in <i>or</i> <Link className="o-link" to="/sign-up">sign up</Link>
        </p>

        <SignInFormContainer />

        <Link to="/request-password-reset" className="o-link o-type-medium u-float-right">
            Forgotten password?
        </Link>
    </ScreenWrapper>
);

export default SignInScreen;
