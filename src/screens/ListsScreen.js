import PropTypes from 'prop-types';
import React from 'react';
import { Link, Route } from 'react-router-dom';

// Components
import ScreenWrapper from '../components/ScreenWrapper';

// Containers
import CreateListFormContainer from '../containers/CreateListFormContainer';
import ListsContainer from '../containers/ListsContainer';

import Header from '../components/Header';

const ListsScreen = ({ location, match }) => (
    <div>
        <Header>
            {location.pathname === `${match.url}/create` ? 'Create List' : 'Lists'}
        </Header>

        <Route exact path={`${match.url}/create`} component={CreateListFormContainer} />

        <ScreenWrapper>
            <Route exact path={match.url} render={() => (
                <Link className="o-button" to={`${match.url}/create`}>
                    Create list
                </Link>
            )} />

            <ListsContainer />
        </ScreenWrapper>
    </div>
);

ListsScreen.propTypes = {
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
};

export default ListsScreen;
