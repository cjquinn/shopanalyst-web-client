import PropTypes from 'prop-types';
import React from 'react';

// Components
import Svg from '../components/Svg';

// Sprites
import tick from '../assets/svg/tick.svg';

const Item = ({ handleToggleSelected, htmlFor, item }) => (
    <div className="item">
        <input
            id={htmlFor}
            type="checkbox"
            className="item__checkbox u-hidden"
            checked={item.is_selected}
            onChange={() => handleToggleSelected(item)}
        />

        <label
            htmlFor={htmlFor}
            className={`item__label u-bgcolor-white ${item.is_existing && 'u-color-bronze'}`}
        >
            <span className="item__tick">
                <Svg sprite={tick} />
            </span>

            {item.name}
        </label>
    </div>
);

Item.propTypes = {
    handleToggleSelected: PropTypes.func.isRequired,
    htmlFor: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired
};

export default Item;
