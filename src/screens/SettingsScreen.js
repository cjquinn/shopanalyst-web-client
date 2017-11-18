import React from 'react';

// Components
import Header from '../components/Header';
import ScreenWrapper from '../components/ScreenWrapper';

// Containers
import SignOutLinkContainer from '../containers/SignOutLinkContainer';
import UpdateSettingsFormContainer from '../containers/UpdateSettingsFormContainer';

const SettingsScreen = () => (
    <div>
        <Header>Settings</Header>

        <ScreenWrapper>
            <UpdateSettingsFormContainer />

            <SignOutLinkContainer />
        </ScreenWrapper>
    </div>
);

export default SettingsScreen;
