import React from 'react';

// Components
import Svg from '../components/Svg';

// Sprites
import cross from '../assets/svg/cross.svg';
import minus from '../assets/svg/minus.svg';
import plus from '../assets/svg/plus.svg';
import tick from '../assets/svg/tick.svg';

const Item = () => (
    <li className="item o-list__item">
        <input
            id="item"
            type="checkbox"
            className="item__checkbox u-hidden"
        />

        <label
            htmlFor="item"
            className="item__label u-bgcolor-white"
        >
            <span className="item__tick">
                <Svg sprite={tick} />
            </span>

            Item

            {/*<div className="item__actions">
                <button
                    type="button"
                    className="item__actions__button item__actions__button--increase u-bgcolor-green u-color-white"
                >
                    <Svg sprite={plus} />
                </button>

                <input
                    type="number"
                    className="item__actions__input o-input o-type-medium u-text-center u-bgcolor-pale-grey u-color-grey"
                    value="2"
                />

                <button
                    type="button"
                    className="item__actions__button item__actions__button--decrease u-bgcolor-green u-color-white"
                >
                    <Svg sprite={minus} />
                </button>

                <button
                    type="button"
                    className="item__actions__button item__actions__button--remove u-bgcolor-red u-color-white"
                >
                    <Svg sprite={cross} />
                </button>
            </div>

            <span className="item__value o-type-medium u-text-center">2</span>*/}
        </label>
    </li>
);

export default Item;
