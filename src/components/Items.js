import PropTypes from 'prop-types';
import React from 'react';

// Components
import Item from './Item';

const Items = ({ empty, handleToggleSelected, items, title }) => (
    <div className="u-space">
        <label className="u-block">{title}</label>

        <div className="u-bgcolor-light-grey u-bradius-5 u-ph u-pv-2">
            {items.length === 0
                ? <p className="o-type-medium u-color-brown u-lh-36">{empty}</p>
                : <ul className="o-list o-list--block">
                    {items.map((item, index) => (
                        <li className="o-list__item" key={index}>
                            <Item
                                handleToggleSelected={handleToggleSelected}
                                htmlFor={`${title}-${index}`}
                                item={item}
                            />
                        </li>
                    ))}
                </ul>
            }
        </div>
    </div>
);

Items.propTypes = {
    empty: PropTypes.string.isRequired,
    handleToggleSelected: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
};

export default Items;
