import PropTypes from 'prop-types';
import React from 'react';

const ListItems = ({ children, component: Component, listName, listItems, ...props }) => {
    if (listItems.length === 0) {
        return children;
    }

    return (
        <ul className="o-list o-list--block">
            {listItems.map((listItem, index) => (
                <Component
                    id={`${listName}-${index}`}
                    key={index}
                    listItem={listItem}
                    {...props}
                />
            ))}
        </ul>
    );
};

ListItems.propTypes = {
    children: PropTypes.node.isRequired,
    component: PropTypes.func.isRequired,
    listItems: PropTypes.array.isRequired,
    listName: PropTypes.string.isRequired
};

export default ListItems;
