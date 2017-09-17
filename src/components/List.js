import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';
import { Link, Route } from 'react-router-dom';

// Components
import Items from '../components/Items';
import ScreenWrapper from '../components/ScreenWrapper';

const List = ({ list, match }) => {
    if (!list) {
        return <h1>Loading</h1>;
    }

    return (
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

            <Items items={list.list_items} />

            <button className="o-button" type="button">
                Duplicate list
            </button>
        </ScreenWrapper>
    );
};

List.propTypes = {
    list: PropTypes.object,
    match: PropTypes.object.isRequired
};

export default withRouter(List);
