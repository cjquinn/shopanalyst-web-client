import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Header from '../components/Header';
import HeaderLink from '../components/HeaderLink';
import HeaderTitle from '../components/HeaderTitle';
import ScreenWrapper from '../components/ScreenWrapper';
import Splash from '../components/Splash';
import Svg from '../components/Svg';
import Template from '../components/Template';

// Containers
import AddItemsInputContainer from '../containers/AddItemsInputContainer';
import ItemOptionsContainer from '../containers/ItemOptionsContainer';
import ListItemsContainer from '../containers/ListItemsContainer';

// Sprites
import back from '../assets/svg/back.svg';
import ellipsis from '../assets/svg/ellipsis.svg';

const ListScreen = ({ list, match }) => (
    <Template>
        {!list && <Splash>Loading...</Splash>}

        {list &&
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
                        <HeaderLink side="right" to="/">
                            <Svg sprite={ellipsis} />
                        </HeaderLink>
                    }
                </Header>

                <ScreenWrapper>
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
                            component={ItemOptionsContainer}
                        />
                    </Switch>
                </ScreenWrapper>

                <AddItemsInputContainer />
            </Template>
        }
    </Template>
);

ListScreen.propTypes = {
    list: PropTypes.object,
    match: PropTypes.object.isRequired
};

export default ListScreen;
