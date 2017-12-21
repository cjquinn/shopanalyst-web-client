import PropTypes from 'prop-types';
import React from 'react';

// Components
import Header from '../components/Header';
import HeaderLink from '../components/HeaderLink';
import HeaderTitle from '../components/HeaderTitle';
import ScreenWrapper from '../components/ScreenWrapper';
import Svg from '../components/Svg';
import Template from '../components/Template';

// Containers
import DeleteListHeaderLinkContainer from '../containers/DeleteListHeaderLinkContainer';
import UpdateListFormContainer from '../containers/UpdateListFormContainer';

// Sprites
import back from '../assets/svg/back.svg';

const UpdateListScreen = ({ list }) => (
    <Template>
        <Header>
            <HeaderTitle>Update List</HeaderTitle>

            <HeaderLink side="left" to={`/lists/${list.id}`}>
                <Svg sprite={back} />
            </HeaderLink>

            <DeleteListHeaderLinkContainer />
        </Header>

        <ScreenWrapper>
            <UpdateListFormContainer />
        </ScreenWrapper>
    </Template>
);

UpdateListScreen.propTypes = {
    list: PropTypes.object.isRequired
};

export default UpdateListScreen;
