import React from 'react';

// Components
import HeaderTitle from '../components/Header/HeaderTitle';
import HeaderWrapper from '../components/Header/HeaderWrapper';
import ScreenWrapper from '../components/shared/ScreenWrapper';
import Template from '../components/shared/Template';

// Containers
import NavContainer from '../containers/shared/NavContainer';
import SignOutHeaderLinkContainer from '../containers/Header/SignOutHeaderLinkContainer';
import UpdateSettingsFormContainer from '../containers/Form/UpdateSettingsFormContainer';

const SettingsScreen = () => (
    <Template>
        <HeaderWrapper>
            <HeaderTitle>Settings</HeaderTitle>

            <SignOutHeaderLinkContainer />
        </HeaderWrapper>

        <ScreenWrapper modifier="with-nav">
            <UpdateSettingsFormContainer />
        </ScreenWrapper>

        <NavContainer />
    </Template>
);

export default SettingsScreen;
