import React from 'react';

// Components
import HeaderTitle from '../components/Header/HeaderTitle';
import HeaderWrapper from '../components/Header/HeaderWrapper';
import ScreenWrapper from '../components/shared/ScreenWrapper';
import Splash from '../components/shared/Splash';
import Template from '../components/shared/Template';

// Containers
import NavContainer from '../containers/shared/NavContainer';

const AnalyseScreen = () => (
    <Template>
        <HeaderWrapper>
            <HeaderTitle>Analyse</HeaderTitle>
        </HeaderWrapper>

        <ScreenWrapper modifier="with-nav">
            <Splash>
                Nothing to see here...yet...
            </Splash>
        </ScreenWrapper>

        <NavContainer />
    </Template>
);

export default AnalyseScreen;
