import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Template from '../components/shared/Template';

// Containers
import SignUpFormContainer from '../containers/Form/SignUpFormContainer';

const SignUpScreen = () => (
    <Template>
        <p className="u-color-help u-text-center">
            Sign up <i>or</i> <Link className="c-link" to="/sign-in">sign in</Link>
        </p>

        <SignUpFormContainer />
    </Template>
);

export default SignUpScreen;
