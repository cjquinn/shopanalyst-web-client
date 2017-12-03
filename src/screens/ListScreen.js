import PropTypes from 'prop-types';
import React from 'react';

// Components
import Header from '../components/Header';
import HeaderLink from '../components/HeaderLink';
import HeaderTitle from '../components/HeaderTitle';
import ScreenWrapper from '../components/ScreenWrapper';
import Splash from '../components/Splash';
import Svg from '../components/Svg';
import Template from '../components/Template';

// Containers
import ListItemsContainer from '../containers/ListItemsContainer';

// Sprites
import back from '../assets/svg/back.svg';
import ellipsis from '../assets/svg/ellipsis.svg';

const ListScreen = ({ list }) => (
    <Template>
        {!list && <Splash>Loading...</Splash>}

        {list &&
            <Template>
                <Header>
                    <HeaderLink side="left" to="/lists">
                        <Svg sprite={back} />
                    </HeaderLink>

                    <HeaderTitle>{list.name}</HeaderTitle>

                    <HeaderLink side="right" to="/">
                        <Svg sprite={ellipsis} />
                    </HeaderLink>
                </Header>

                <ScreenWrapper>
                    <div className="o-type-medium u-flex u-jc-between u-ai-center">
                        <span>
                            {list.itemsProgress}
                        </span>

                        <span className="u-color-help">
                            {list.date}
                        </span>
                    </div>

                    <ListItemsContainer />
                </ScreenWrapper>
            </Template>
        }
    </Template>
);

ListScreen.propTypes = {
    list: PropTypes.object
};

export default ListScreen;
