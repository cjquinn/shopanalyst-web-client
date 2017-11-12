import PropTypes from 'prop-types';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

// Components
import EditListForm from '../components/EditListForm';
import Header from '../components/Header';
import ScreenWrapper from '../components/ScreenWrapper';
import Splash from '../components/Splash';

// Containers
import AddItemsFormContainer from '../containers/AddItemsFormContainer';
import ListItemsContainer from '../containers/ListItemsContainer';

const ListScreen = ({ list, location, match }) => (
    <div>
        <Switch>
            <Route exact path={`${match.url}/edit`} component={EditListForm} />
            <Route render={() => (
                <Header>
                    {location.pathname === `${match.url}/add-items`
                        ? 'Add Items'
                        : <Link className="o-link u-color-grey" to={`${match.url}/edit`}>{list ? list.name : 'Loading'}</Link>
                    }
                </Header>
            )} />
        </Switch>

        <Route exact path={`${match.path}/add-items`} component={AddItemsFormContainer} />

        {!list && <Splash>Loading...</Splash>}

        {list &&
            <ScreenWrapper>
                <Route exact path={match.url} render={() => (
                    <Link className="o-button" to={`${match.url}/add-items`}>
                        Add items
                    </Link>
                )} />

                <div className="list-meta">
                    <span className="o-type-small">
                        {list.itemsProgress}
                    </span>

                    <span className="o-type-small u-color-brown">
                        {list.date}
                    </span>
                </div>

                <ListItemsContainer />

                <button className="o-button" type="button">
                    Duplicate list
                </button>
            </ScreenWrapper>
        }
    </div>
);

ListScreen.propTypes = {
    list: PropTypes.object,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
};

export default ListScreen;
