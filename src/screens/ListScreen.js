import PropTypes from 'prop-types';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

// Components
import AddItemsForm from '../components/AddItemsForm';
import EditListForm from '../components/EditListForm';
import Header from '../components/Header';

// Containers
import ListContainer from '../containers/ListContainer';

const ListScreen = ({ location, match }) => (
    <div>
        <Switch>
            <Route exact path={`${match.url}/edit`} component={EditListForm} />
            <Route render={() => (
                <Header>
                    {location.pathname === `${match.url}/add-items`
                        ? 'Add Items'
                        : <Link className="o-link u-color-grey" to={`${match.url}/edit`}>List Name</Link>
                    }
                </Header>
            )} />
        </Switch>

        <Route exact path={`${match.url}/add-items`} component={AddItemsForm} />

        <ListContainer />
    </div>
);

ListScreen.propTypes = {
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
};

export default ListScreen;
