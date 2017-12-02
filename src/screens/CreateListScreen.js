import React from 'react';

// Components
import Header from '../components/Header';
import HeaderLink from '../components/HeaderLink';
import HeaderTitle from '../components/HeaderTitle';
import ScreenWrapper from '../components/ScreenWrapper';
import Svg from '../components/Svg';
import Template from '../components/Template';

// Containers
import CreateListFormContainer from '../containers/CreateListFormContainer';

// Sprites
import back from '../assets/svg/back.svg';

const CreateListScreen = () => (
    <Template>
        <Header>
            <HeaderTitle>Create List</HeaderTitle>

            <HeaderLink side="left" to="/lists">
                <Svg sprite={back} />
            </HeaderLink>
        </Header>

        <ScreenWrapper>
            <CreateListFormContainer />
        </ScreenWrapper>
    </Template>
);

export default CreateListScreen;
