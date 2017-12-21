import PropTypes from 'prop-types';
import React from 'react';

// Components
import Svg from '../components/Svg';

// Sprites
import cross from '../assets/svg/cross.svg';

const ListItemActions = ({ handleBlurQuantity, handleChangeQuantity, handleDeleteListItem, quantity }) => (
    <div className="c-item__actions u-flex u-ai-center">
        <input
            type="number"
            className="c-input c-item__input u-b u-baseline-x3 u-text-center"
            value={quantity}
            onBlur={handleBlurQuantity}
            onChange={handleChangeQuantity}
        />

        <button
            type="button"
            className="c-item__button c-item__button--delete u-baseline-x3 u-color-warning"
            onClick={handleDeleteListItem}
        >
            <Svg sprite={cross} />
        </button>
    </div>
);

ListItemActions.propTypes = {
    handleBlurQuantity: PropTypes.func.isRequired,
    handleChangeQuantity: PropTypes.func.isRequired,
    handleDeleteListItem: PropTypes.func.isRequired,
    quantity: PropTypes.string
};

export default ListItemActions;
