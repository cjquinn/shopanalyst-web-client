import PropTypes from 'prop-types';
import React from 'react';

// Components
import ListItem from './ListItem';

const ListItems = ({ children, handleToggleComplete, listItems, listName, withActions = true }) => {
    if (listItems.length === 0) {
        return children;
    }

    return (
        <ul className="o-list o-list--block">
            {listItems.map((listItem, index) => (
                <ListItem
                    handleToggleComplete={handleToggleComplete}
                    id={`${listName}-${index}`}
                    key={index}
                    listItem={listItem}
                    withActions={withActions}
                />
            ))}
        </ul>
    );
};

ListItems.propTypes = {
    children: PropTypes.node.isRequired,
    handleToggleComplete: PropTypes.func.isRequired,
    listName: PropTypes.string.isRequired,
    listItems: PropTypes.array.isRequired,
    withActions: PropTypes.bool
};

export default ListItems;
