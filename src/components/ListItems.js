import PropTypes from 'prop-types';
import React from 'react';

// Components
import ListItem from './ListItem';

const ListItems = ({ children, listItems }) => {
    if (listItems.length === 0) {
        return children;
    }

    return (
        <ul className="o-list o-list--block">
            {listItems.map((listItem, index) => (
                <ListItem
                    key={index}
                    listItem={listItem}
                />
            ))}
        </ul>
    );
};

ListItems.propTypes = {
    children: PropTypes.node.isRequired,
    listItems: PropTypes.array.isRequired
};

export default ListItems;
