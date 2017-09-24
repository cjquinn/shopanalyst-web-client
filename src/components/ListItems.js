import PropTypes from 'prop-types';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// Components
import ListItem from './ListItem';

const ListItems = ({ listItems, match }) => {
    if (listItems.length === 0) {
        return (
            <p className="o-type-medium u-color-brown u-text-center">
                Once you&#039;ve <Link className="o-link" to={`${match.url}/add-items`}>added items</Link> they will show here
            </p>
        );
    }

    return (
        <ul className="o-list o-list--block">
            {listItems.map(listItem => (
                <ListItem
                    key={listItem.id}
                    listItem={listItem}
                />
            ))}
        </ul>
    );
};

ListItems.propTypes = {
    listItems: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired
};

export default withRouter(ListItems);
