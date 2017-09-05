import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Button from '../components/Button';
import LabeledInput from '../components/LabeledInput';

const LoginScreen = () => (
    <div className="o-container u-space-2 u-width-full">
        <h1 className="o-type-xlarge u-color-green u-text-center u-weight-normal">Shopanalyst</h1>

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

        <Button colour="green">Login</Button>

        <Link to="/forgotten-password" className="o-link u-float-right">
            Forgotten password?
        </Link>
    </div>
);

export default LoginScreen;