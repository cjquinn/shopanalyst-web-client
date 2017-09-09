import React from 'react';
import { Link } from 'react-router-dom';

// Components
import LabeledInput from '../components/LabeledInput';
import ScreenContainer from '../components/ScreenContainer';

const SignUpScreen = () => (
    <ScreenContainer>
        <p className="u-color-brown u-text-center">
            Sign up <i>or</i> <Link className="o-link" to="/sign-in">sign in</Link>
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
            placeholder="Enter a password..."
            type="password"
        />

        <button className="o-button" type="button">Sign up</button>
    </ScreenContainer>
);

export default SignUpScreen;
