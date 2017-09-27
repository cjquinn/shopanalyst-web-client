import PropTypes from 'prop-types';
import React from 'react';

// Components
import ListItem from './ListItem';

const ListItems = ({ children, handleToggleComplete, listItems, withActions = true }) => {
    if (listItems.length === 0) {
        return children;
    }

    return (
        <ul className="o-list o-list--block">
            {listItems.map((listItem, index) => (
                <ListItem
                    handleToggleComplete={handleToggleComplete}
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
    listItems: PropTypes.array.isRequired,
    withActions: PropTypes.bool
};

export default ListItems;
