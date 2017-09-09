import React from 'react';

// Components
import Header from '../components/Header';
import LabeledInput from '../components/LabeledInput';
import ScreenContainer from '../components/ScreenContainer';

const SettingsScreen = () => (
    <div>
        <Header>Settings</Header>

        <ScreenContainer>
            <h2 className="u-color-brown o-type-medium u-uppercase u-weight-normal">
                Basic Info
            </h2>

            <LabeledInput
                inverted
                label="Email"
                name="email"
                placeholder="Enter your email..."
                type="email"
            />

            <h2 className="u-color-brown o-type-medium u-uppercase u-weight-normal">
                Update Your Password
            </h2>

            <LabeledInput
                inverted
                label="Current password"
                name="current_password"
                placeholder="Enter your current password..."
                type="password"
            />

            <LabeledInput
                inverted
                label="New password"
                name="new_password"
                placeholder="Enter your new password..."
                type="password"
            />

            <button className="o-button" type="button">Save changes</button>
        </ScreenContainer>
    </div>
);

export default SettingsScreen;
