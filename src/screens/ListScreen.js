import PropTypes from 'prop-types';
import React from 'react';
import { Link, Route } from 'react-router-dom';

// Components
import AddItemsForm from '../components/AddItemsForm';
import Items from '../components/Items';
import ListMeta from '../components/ListMeta';
import ScreenContainer from '../components/ScreenContainer';

const ListScreen = ({ match }) => (
    <div>
        <Route exact path={`${match.url}/add-items`} component={AddItemsForm} />

        <ScreenContainer>
            <Route exact path={match.url} render={() => (
                <Link className="o-button" to={`${match.url}/add-items`}>
                    Add items
                </Link>
            )} />

            <ListMeta />

            <Items />

            <button className="o-button" type="button">
                Duplicate list
            </button>
        </ScreenContainer>
    </div>
);

ListScreen.propTypes = {
    match: PropTypes.object.isRequired
};

export default ListScreen;
