import React from 'react';
import { Link } from 'react-router-dom';

// Components
import LabeledInput from '../components/LabeledInput';
import ScreenWrapper from '../components/ScreenWrapper';

const RequestPasswordResetScreen = () => (
    <ScreenWrapper>
        <p className="u-color-brown u-text-center">
            Request password reset
        </p>

        <LabeledInput
            inverted
            label="Email"
            name="email"
            placeholder="Enter your email..."
            type="email"
        />

        <button className="o-button" type="button">Request password reset</button>

        <Link to="/sign-in" className="o-link o-type-medium u-float-right">
            I remember my password
        </Link>
    </ScreenWrapper>
);

export default RequestPasswordResetScreen;
