import PropTypes from 'prop-types';
import React from 'react';

// Components
import Svg from '../components/Svg';

// Sprites
import cross from '../assets/svg/cross.svg';
import minus from '../assets/svg/minus.svg';
import plus from '../assets/svg/plus.svg';
import tick from '../assets/svg/tick.svg';

const ListItem = ({ handleDecreaseQuantity, handleDeleteListItem, handleIncreaseQuantity, handleUpdateQuantity, htmlFor, listItem, handleToggleCompleted }) => (
    <div className="item item--list-item">
        <input
            id={htmlFor}
            type="checkbox"
            className="item__checkbox u-hidden"
            checked={listItem.is_complete}
            onChange={() => handleToggleCompleted(listItem)}
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
                        onClick={() => handleIncreaseQuantity(listItem)}
                    >
                        <Svg sprite={plus} />
                    </button>

                    <input
                        type="number"
                        min="1"
                        className="item__actions__input o-input o-type-medium u-text-center u-bgcolor-pale-grey u-color-grey"
                        value={listItem.quantity}
                        onChange={event => handleUpdateQuantity(listItem, event.target.value)}
                    />

                    <button
                        type="button"
                        className={`item__actions__button item__actions__button--${listItem.quantity === 1 ? 'remove u-bgcolor-red' : 'decrease u-bgcolor-green'} u-color-white`}
                        onClick={() =>
                            listItem.quantity === 1
                                ? handleDeleteListItem(listItem)
                                : handleDecreaseQuantity(listItem)
                        }
                    >
                        <Svg sprite={listItem.quantity === 1 ? cross : minus} />
                    </button>
                </div>
            }

            {listItem.is_complete &&
                    <span className="item__value o-type-medium u-text-center">
                        {listItem.quantity}
                    </span>
                }
        </label>
    </div>
);

ListItem.propTypes = {
    handleDecreaseQuantity: PropTypes.func.isRequired,
    handleDeleteListItem: PropTypes.func.isRequired,
    handleIncreaseQuantity: PropTypes.func.isRequired,
    handleUpdateQuantity: PropTypes.func.isRequired,
    htmlFor: PropTypes.string.isRequired,
    listItem: PropTypes.object.isRequired,
    handleToggleCompleted: PropTypes.func.isRequired
};

export default ListItem;
