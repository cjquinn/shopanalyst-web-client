import React from 'react';

// Components
import Header from '../components/Header';
import HeaderTitle from '../components/HeaderTitle';
import ScreenWrapper from '../components/ScreenWrapper';
import Splash from '../components/Splash';
import Template from '../components/Template';

// Containers
import NavContainer from '../containers/NavContainer';

const AnalyseScreen = () => (
    <Template>
        <Header>
            <HeaderTitle>Analyse</HeaderTitle>
        </Header>

        <ScreenWrapper modifier="with-nav">
            <Splash>
                Nothing to see here...yet...
            </Splash>
        </ScreenWrapper>

        <NavContainer />
    </Template>
);

export default AnalyseScreen;
