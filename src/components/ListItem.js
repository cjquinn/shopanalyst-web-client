import PropTypes from 'prop-types';
import React from 'react';

// Components
import Svg from '../components/Svg';

// Sprites
import cross from '../assets/svg/cross.svg';
import minus from '../assets/svg/minus.svg';
import plus from '../assets/svg/plus.svg';
import tick from '../assets/svg/tick.svg';

const ListItem = ({ handleToggleComplete, id, listItem, withActions }) => (
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

            {withActions &&
                <div className="list-item__actions">
                    <button
                        type="button"
                        className="list-item__actions__button list-item__actions__button--increase u-bgcolor-green u-color-white"
                    >
                        <Svg sprite={plus} />
                    </button>

                    <input
                        type="number"
                        className="list-item__actions__input o-input o-type-medium u-text-center u-bgcolor-pale-grey u-color-grey"
                        defaultValue={listItem.quantity}
                    />

                    {listItem.quantity > 1 &&
                        <button
                            type="button"
                            className="list-item__actions__button list-item__actions__button--decrease u-bgcolor-green u-color-white"
                        >
                            <Svg sprite={minus} />
                        </button>
                    }

                    {listItem.quantity === 1 &&
                        <button
                            type="button"
                            className="list-item__actions__button list-item__actions__button--remove u-bgcolor-red u-color-white"
                        >
                            <Svg sprite={cross} />
                        </button>
                    }
                </div>
            }

            {withActions && listItem.is_complete && <span className="list-item__value o-type-medium u-text-center">2</span>}
        </label>
    </li>
);

ListItem.propTypes = {
    handleToggleComplete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    listItem: PropTypes.object.isRequired,
    withActions: PropTypes.bool.isRequired
};

export default ListItem;
