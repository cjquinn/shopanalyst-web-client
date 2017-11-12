import PropTypes from 'prop-types';
import React from 'react';

// Components
import Svg from '../components/Svg';

// Sprites
import cross from '../assets/svg/cross.svg';
import minus from '../assets/svg/minus.svg';
import plus from '../assets/svg/plus.svg';
import tick from '../assets/svg/tick.svg';

const ListItem = ({ decreaseQuantity, deleteListItem, htmlFor, increaseQuantity, listItem, toggleCompleted }) => (
    <div className="item item--list-item">
        <input
            id={htmlFor}
            type="checkbox"
            className="item__checkbox u-hidden"
            checked={listItem.is_complete}
            onChange={() => toggleCompleted(listItem)}
        />

        <label
            htmlFor={htmlFor}
            className="item__label u-bgcolor-white"
        >
            <span className="item__tick">
                <Svg sprite={tick} />
            </span>

            {listItem.item.name}

            {!listItem.is_complete &&
                <div className="item__actions">
                    <button
                        type="button"
                        className="item__actions__button item__actions__button--increase u-bgcolor-green u-color-white"
                        onClick={() => increaseQuantity(listItem)}
                    >
                        <Svg sprite={plus} />
                    </button>

                    <input
                        type="number"
                        className="item__actions__input o-input o-type-medium u-text-center u-bgcolor-pale-grey u-color-grey"
                        value={listItem.quantity}
                        onChange={() => ({})}
                    />

                    <button
                        type="button"
                        className={`item__actions__button item__actions__button--${listItem.quantity === 1 ? 'remove u-bgcolor-red' : 'decrease u-bgcolor-green'} u-color-white`}
                        onClick={() =>
                            listItem.quantity === 1
                                ? deleteListItem(listItem)
                                : decreaseQuantity(listItem)
                        }
                    >
                        <Svg sprite={listItem.quantity === 1 ? cross : minus} />
                    </button>
                </div>
            }

            {listItem.is_complete && <span className="item__value o-type-medium u-text-center">2</span>}
        </label>
    </div>
);

ListItem.propTypes = {
    decreaseQuantity: PropTypes.func.isRequired,
    deleteListItem: PropTypes.func.isRequired,
    htmlFor: PropTypes.string.isRequired,
    increaseQuantity: PropTypes.func.isRequired,
    listItem: PropTypes.object.isRequired,
    toggleCompleted: PropTypes.func.isRequired
};

export default ListItem;
