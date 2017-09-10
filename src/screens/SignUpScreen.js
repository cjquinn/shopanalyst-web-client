import React from 'react';
import { Link } from 'react-router-dom';

// Components
import ScreenWrapper from '../components/ScreenWrapper';

// Containers
import SignUpFormContainer from '../containers/SignUpFormContainer';

const SignUpScreen = () => (
    <ScreenWrapper>
        <p className="u-color-brown u-text-center">
            Sign up <i>or</i> <Link className="o-link" to="/sign-in">sign in</Link>
        </p>

        <SignUpFormContainer />
    </ScreenWrapper>
);

export default SignUpScreen;
