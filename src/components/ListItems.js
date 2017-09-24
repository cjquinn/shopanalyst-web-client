import PropTypes from 'prop-types';
import React from 'react';

// Components
import ListItem from './ListItem';

const ListItems = ({ listItems }) => (
    <ul className="o-list o-list--block">
        {listItems.map((listItem, index) => (
            <ListItem
                key={index}
                listItem={listItem}
            />
        ))}
    </ul>
);

ListItems.propTypes = {
    listItems: PropTypes.array.isRequired
};

export default ListItems;
