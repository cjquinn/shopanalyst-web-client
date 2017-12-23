import React from 'react';

// Components
import Header from '../components/Header';
import HeaderTitle from '../components/HeaderTitle';
import ScreenWrapper from '../components/ScreenWrapper';
import Template from '../components/Template';

// Containers
import NavContainer from '../containers/NavContainer';
import SignOutHeaderLinkContainer from '../containers/SignOutHeaderLinkContainer';
import UpdateSettingsFormContainer from '../containers/UpdateSettingsFormContainer';

const SettingsScreen = () => (
    <Template>
        <Header>
            <HeaderTitle>Settings</HeaderTitle>

            <SignOutHeaderLinkContainer />
        </Header>

        <ScreenWrapper modifier="with-nav">
            <UpdateSettingsFormContainer />
        </ScreenWrapper>

        <NavContainer />
    </Template>
);

export default SettingsScreen;
