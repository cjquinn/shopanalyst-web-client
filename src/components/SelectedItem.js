import PropTypes from 'prop-types';
import React from 'react';

// Components
import Svg from '../components/Svg';

// Sprites
import tick from '../assets/svg/tick.svg';

const SelectedItem = ({ handleToggleComplete, id, listItem }) => (
    <li className="list-item o-list__item">
        <input
            id={id}
            type="checkbox"
            className="list-item__checkbox u-hidden"
            checked={listItem.is_complete}
            onChange={() => handleToggleComplete(listItem)}
        />

        <label
            htmlFor={id}
            className="list-item__label u-bgcolor-white"
        >
            <span className="list-item__tick">
                <Svg sprite={tick} />
            </span>

            {listItem.item.name}
        </label>
    </li>
);

SelectedItem.propTypes = {
    handleToggleComplete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    listItem: PropTypes.object.isRequired
};

export default SelectedItem;
