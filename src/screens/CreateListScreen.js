import React from 'react';

// Components
import HeaderLink from '../components/Header/HeaderLink';
import HeaderTitle from '../components/Header/HeaderTitle';
import HeaderWrapper from '../components/Header/HeaderWrapper';
import ScreenWrapper from '../components/shared/ScreenWrapper';
import Svg from '../components/shared/Svg';
import Template from '../components/shared/Template';

// Containers
import CreateListFormContainer from '../containers/Form/CreateListFormContainer';

// Sprites
import back from '../assets/svg/back.svg';

const CreateListScreen = () => (
    <Template>
        <HeaderWrapper>
            <HeaderTitle>Create List</HeaderTitle>

            <HeaderLink side="left" to="/lists">
                <Svg sprite={back} />
            </HeaderLink>
        </HeaderWrapper>

        <ScreenWrapper>
            <CreateListFormContainer />
        </ScreenWrapper>
    </Template>
);

export default CreateListScreen;
