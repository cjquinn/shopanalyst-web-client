import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Header from '../components/Header';
import HeaderLink from '../components/HeaderLink';
import HeaderTitle from '../components/HeaderTitle';
import ScreenWrapper from '../components/ScreenWrapper';
import Svg from '../components/Svg';
import Template from '../components/Template';

// Containers
import AddItemsInputContainer from '../containers/AddItemsInputContainer';
import ItemsContainer from '../containers/ItemsContainer';
import ListItemsContainer from '../containers/ListItemsContainer';

// Sprites
import back from '../assets/svg/back.svg';
import ellipsis from '../assets/svg/ellipsis.svg';

const ListScreen = ({ list, match }) => (
    <Template>
        <Header>
            <HeaderLink side="left" to={match.isExact ? '/lists' : match.url}>
                <Svg sprite={back} />
            </HeaderLink>

            <HeaderTitle>
                <Switch>
                    <Route exact path={match.path} render={() => list.name} />
                    <Route exact path={`${match.path}/add-items`} render={() => 'Add Items'} />
                </Switch>
            </HeaderTitle>

            {match.isExact &&
                <HeaderLink side="right" to={`${match.url}/update`}>
                    <Svg sprite={ellipsis} />
                </HeaderLink>
            }
        </Header>

        <AddItemsInputContainer />

        <ScreenWrapper modifier="with-add-items">
            <Switch>
                <Route exact path={match.path} render={matchProps =>
                    <Template>
                        <div className="o-type-medium u-flex u-jc-between u-ai-center u-color-help">
                            <span>
                                {list.itemsProgress}
                            </span>

                            <span>
                                {list.date}
                            </span>
                        </div>

                        <ListItemsContainer {...matchProps} />
                    </Template>
                } />
                <Route
                    exact
                    path={`${match.path}/add-items`}
                    component={ItemsContainer}
                />
            </Switch>
        </ScreenWrapper>
    </Template>
);

ListScreen.propTypes = {
    list: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
};

export default ListScreen;
