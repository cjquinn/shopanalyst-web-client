import React from 'react';
import { Link } from 'react-router-dom';

// Components
import LabeledInput from '../components/LabeledInput';
import ScreenWrapper from '../components/ScreenWrapper';

const SignInScreen = () => (
    <ScreenWrapper>
        <p className="u-color-brown u-text-center">
            Sign in <i>or</i> <Link className="o-link" to="/sign-up">sign up</Link>
        </p>

        <LabeledInput
            inverted
            label="Email"
            name="email"
            placeholder="Enter your email..."
            type="email"
        />

        <LabeledInput
            inverted
            label="Password"
            name="password"
            placeholder="Enter your password..."
            type="password"
        />

        <button className="o-button" type="button">Sign in</button>

        <Link to="/request-password-reset" className="o-link o-type-medium u-float-right">
            Forgotten password?
        </Link>
    </ScreenWrapper>
);

export default SignInScreen;
