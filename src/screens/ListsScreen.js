import React from 'react';

// Components
import Header from '../components/Header';
import HeaderLink from '../components/HeaderLink';
import HeaderTitle from '../components/HeaderTitle';
import ScreenWrapper from '../components/ScreenWrapper';
import Svg from '../components/Svg';
import Template from '../components/Template';

// Containers
import ListsContainer from '../containers/ListsContainer';

// Sprites
import plus from '../assets/svg/plus.svg';

const ListsScreen = () => (
    <Template>
        <Header>
            <HeaderTitle>Lists</HeaderTitle>

            <HeaderLink side="right" to="/create-list">
                <Svg sprite={plus} />
            </HeaderLink>
        </Header>

        <ScreenWrapper>
            <ListsContainer />
        </ScreenWrapper>
    </Template>
);

export default ListsScreen;
