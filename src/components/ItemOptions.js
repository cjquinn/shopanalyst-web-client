import PropTypes from 'prop-types';
import React from 'react';

// Components
import Svg from './Svg';
import Template from '../components/Template';

// Sprites
import tick from '../assets/svg/tick.svg';

const ItemOptions = ({ itemOptions }) => (
    <Template>
        {itemOptions.length === 0
            ? <p className="o-type-medium u-color-help u-text-center">
                Search for items
            </p>
            : <ul className="o-list o-list--block">
                {itemOptions.map((itemOption, i) =>
                    <li className="o-list__item" key={i}>
                        <button className={`c-item u-flex u-ai-center u-b u-baseline-x3 u-bradius-x3 u-1/1 ${itemOption.is_existing ? 'u-bgcolor-input u-color-hint' : 'u-bgcolor-foreground'}`}>
                            <div className="c-item__tick u-flex u-bradius-100">
                                <Svg sprite={tick} />
                            </div>

                            {itemOption.name}
                        </button>
                    </li>
                )}
            </ul>
        }
    </Template>
);

ItemOptions.propTypes = {
    itemOptions: PropTypes.array.isRequired
};

export default ItemOptions;
