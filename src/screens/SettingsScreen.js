import React from 'react';

// Components
import Header from '../components/Header';
import HeaderTitle from '../components/HeaderTitle';
import ScreenWrapper from '../components/ScreenWrapper';
import Template from '../components/Template';

// Containers
import NavContainer from '../containers/NavContainer';
import SignOutLinkContainer from '../containers/SignOutLinkContainer';
import UpdateSettingsFormContainer from '../containers/UpdateSettingsFormContainer';

const SettingsScreen = () => (
    <Template>
        <Header>
            <HeaderTitle>Settings</HeaderTitle>
        </Header>

        <ScreenWrapper>
            <UpdateSettingsFormContainer />

            <SignOutLinkContainer />
        </ScreenWrapper>

        <NavContainer />
    </Template>
);

export default SettingsScreen;
