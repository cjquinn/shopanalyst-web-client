import PropTypes from 'prop-types';
import React from 'react';

// Components
import Svg from '../components/Svg';

// Sprites
import cross from '../assets/svg/cross.svg';
import plus from '../assets/svg/plus.svg';

const ListItemActions = ({ handleBlurQuantity, handleChangeQuantity, handleDecreaseQuantity, handleDeleteListItem, handleIncreaseQuantity, quantity, quantityIsOne }) => (
    <div className="item__actions">
        <button
            type="button"
            className="item__actions__button item__actions__button--increase u-bgcolor-green u-color-white"
            onClick={handleIncreaseQuantity}
        >
            <Svg sprite={plus} />
        </button>

        <input
            type="number"
            className="item__actions__input o-input o-type-medium u-text-center u-bgcolor-pale-grey u-color-grey"
            value={quantity}
            onBlur={handleBlurQuantity}
            onChange={handleChangeQuantity}
        />

        <button
            type="button"
            className={`item__actions__button item__actions__button--${quantityIsOne ? 'remove u-bgcolor-red' : 'decrease u-bgcolor-green'} u-color-white`}
            onClick={quantityIsOne ? handleDeleteListItem : handleDecreaseQuantity}
        >
            <Svg sprite={cross} />
        </button>
    </div>
);

ListItemActions.propTypes = {
    handleBlurQuantity: PropTypes.func.isRequired,
    handleChangeQuantity: PropTypes.func.isRequired,
    handleDecreaseQuantity: PropTypes.func.isRequired,
    handleDeleteListItem: PropTypes.func.isRequired,
    handleIncreaseQuantity: PropTypes.func.isRequired,
    quantity: PropTypes.string,
    quantityIsOne: PropTypes.bool.isRequired
};

export default ListItemActions;
