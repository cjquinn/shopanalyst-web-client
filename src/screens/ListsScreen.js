import React from 'react';

// Components
import HeaderLink from '../components/Header/HeaderLink';
import HeaderTitle from '../components/Header/HeaderTitle';
import HeaderWrapper from '../components/Header/HeaderWrapper';
import ScreenWrapper from '../components/shared/ScreenWrapper';
import Svg from '../components/shared/Svg';
import Template from '../components/shared/Template';

// Containers
import ListsContainer from '../containers/List/ListsContainer';
import NavContainer from '../containers/shared/NavContainer';

// Sprites
import plus from '../assets/svg/plus.svg';

const ListsScreen = () => (
    <Template>
        <HeaderWrapper>
            <HeaderTitle>Lists</HeaderTitle>

            <HeaderLink side="right" to="/create-list">
                <Svg sprite={plus} />
            </HeaderLink>
        </HeaderWrapper>

        <ScreenWrapper modifier="with-nav">
            <ListsContainer />
        </ScreenWrapper>

        <NavContainer />
    </Template>
);

export default ListsScreen;
