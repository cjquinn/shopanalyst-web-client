import PropTypes from 'prop-types';
import React from 'react';

// Components
import Svg from './Svg';

// Containers
import ListItemActionsContainer from '../containers/ListItemActionsContainer';

// Sprites
import tick from '../assets/svg/tick.svg';

const ListItem = ({ listItem, handleToggleCompleted }) => (
    <div className="item item--list-item">
        <input
            id={`list-items-${listItem.id}`}
            type="checkbox"
            className="item__checkbox u-hidden"
            checked={listItem.is_complete}
            onChange={() => handleToggleCompleted(listItem)}
        />

        <label
            htmlFor={`list-items-${listItem.id}`}
            className="item__label u-bgcolor-white"
        >
            <span className="item__tick">
                <Svg sprite={tick} />
            </span>

            {listItem.item.name}

            {!listItem.is_complete && <ListItemActionsContainer listItem={listItem} />}

            {listItem.is_complete &&
                    <span className="item__value o-type-medium u-text-center">
                        {listItem.quantity}
                    </span>
                }
        </label>
    </div>
);

ListItem.propTypes = {
    listItem: PropTypes.object.isRequired,
    handleToggleCompleted: PropTypes.func.isRequired
};

export default ListItem;
