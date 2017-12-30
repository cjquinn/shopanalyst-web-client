import PropTypes from 'prop-types';
import React from 'react';

// Components
import Svg from '../shared/Svg';
import Template from '../shared/Template';

// Sprites
import plus from '../../assets/svg/plus.svg';
import tick from '../../assets/svg/tick.svg';

const Items = ({ handleAddItem, items, lastAddedItem }) => (
    <Template>
        {items.length === 0
            ? (
                <p className={`o-type-medium u-color-${lastAddedItem ? 'success' : 'hint'} u-lh-x3 u-text-center`}>
                    {lastAddedItem ? `${lastAddedItem.name} added to list` : 'Search for items'}
                </p>
            )
            : (
                <ul className="o-list o-list--block">
                    {items.map((item, i) =>
                        <li className="o-list__item" key={i}>
                            <button
                                className={`c-item u-flex u-ai-center u-b u-baseline-x3 u-bradius-x3 u-1/1 ${item.is_existing ? 'u-bgcolor-input u-color-hint' : 'u-bgcolor-foreground'} u-text-left`}
                                onClick={() => handleAddItem(item)}
                            >
                                <div className={`o-circle u-flex u-mh-demi ${item.is_existing ? 'u-color-foreground u-bgcolor-border' : 'u-hover-success'}`}>
                                    <Svg sprite={item.is_existing ? tick : plus} />
                                </div>

                                <span className="c-item__text u-overflow-truncate u-pr">
                                    {`${item.name}${item.is_existing ? ' (on list)' : ''}`}
                                </span>
                            </button>
                        </li>
                    )}
                </ul>
            )
        }
    </Template>
);

Items.propTypes = {
    handleAddItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    lastAddedItem: PropTypes.object
};

export default Items;
