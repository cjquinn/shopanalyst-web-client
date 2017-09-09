import PropTypes from 'prop-types';
import React from 'react';
import { Link, Route } from 'react-router-dom';

// Components
import CreateListForm from '../components/CreateListForm';
import Lists from '../components/Lists';
import ScreenContainer from '../components/ScreenContainer';

import Header from '../components/Header';

const ListsScreen = ({ location, match }) => (
    <div>
        <Header>
            {location.pathname === `${match.url}/create` ? 'Create List' : 'Lists'}
        </Header>

        <Route exact path={`${match.url}/create`} component={CreateListForm} />

        <ScreenContainer>
            <Route exact path={match.url} render={() => (
                <Link className="o-button" to={`${match.url}/create`}>
                    Create list
                </Link>
            )} />

            <Lists />

            <button className="o-button" type="button">
                Load more
            </button>
        </ScreenContainer>
    </div>
);

ListsScreen.propTypes = {
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
};

export default ListsScreen;
