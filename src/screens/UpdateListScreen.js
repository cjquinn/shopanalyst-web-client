import PropTypes from 'prop-types';
import React from 'react';

// Components
import HeaderLink from '../components/Header/HeaderLink';
import HeaderTitle from '../components/Header/HeaderTitle';
import HeaderWrapper from '../components/Header/HeaderWrapper';
import ScreenWrapper from '../components/shared/ScreenWrapper';
import Svg from '../components/shared/Svg';
import Template from '../components/shared/Template';

// Containers
import DeleteListHeaderLinkContainer from '../containers/Header/DeleteListHeaderLinkContainer';
import UpdateListFormContainer from '../containers/Form/UpdateListFormContainer';

// Sprites
import back from '../assets/svg/back.svg';

const UpdateListScreen = ({ list }) => (
    <Template>
        <HeaderWrapper>
            <HeaderTitle>Update List</HeaderTitle>

            <HeaderLink side="left" to={`/lists/${list.id}`}>
                <Svg sprite={back} />
            </HeaderLink>

            <DeleteListHeaderLinkContainer />
        </HeaderWrapper>

        <ScreenWrapper>
            <UpdateListFormContainer />
        </ScreenWrapper>
    </Template>
);

UpdateListScreen.propTypes = {
    list: PropTypes.object.isRequired
};

export default UpdateListScreen;
