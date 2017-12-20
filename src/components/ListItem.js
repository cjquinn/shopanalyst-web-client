import PropTypes from 'prop-types';
import React from 'react';

// Components
import Svg from './Svg';

// Containers
import ListItemActionsContainer from '../containers/ListItemActionsContainer';

// Sprites
import tick from '../assets/svg/tick.svg';

const ListItem = ({ listItem, handleToggleCompleted }) => (
    <div className={`c-item u-flex u-ai-center u-jc-between u-b u-baseline-x3 u-bradius-x3 ${listItem.is_complete ? 'c-item--complete u-bgcolor-input u-color-hint' : 'u-bgcolor-foreground'}`}>
        <input
            id={`list-items-${listItem.id}`}
            type="checkbox"
            className="c-item__checkbox u-hidden"
            checked={listItem.is_complete}
            onChange={() => handleToggleCompleted(listItem)}
        />

        <label
            htmlFor={`list-items-${listItem.id}`}
            className="c-item__label u-flex u-ai-center u-pointer"
        >
            <div className="c-item__tick u-flex u-bradius-100">
                <Svg sprite={tick} />
            </div>

            {listItem.item.name}
        </label>

        {listItem.is_complete
            ? <div className="c-item__value u-text-center">{listItem.quantity}</div>
            : <ListItemActionsContainer listItem={listItem} />
        }
    </div>
);

ListItem.propTypes = {
    listItem: PropTypes.object.isRequired,
    handleToggleCompleted: PropTypes.func.isRequired
};

export default ListItem;
