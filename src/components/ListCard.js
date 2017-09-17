import PropTypes from 'prop-types';
import React from 'react';

const ListCard = ({ list }) => (
    <li className="list-card o-list__item u-p u-bgcolor-white u-bradius-5">
        <div className="list-card__header u-mb">
            <h4 className="u-weight-normal">{list.name}</h4>
            <span className="o-type-small u-color-brown">20th Jun</span>
        </div>

        <div className="list-card__progress list-card__progress--container o-type-small u-bgcolor-off-white u-relative">
            8/{list.list_items.length} items

            <div className="list-card__progress list-card__progress--inner u-absolute u-bgcolor-green u-color-white">
                8/{list.list_items.length} items
            </div>
        </div>
    </li>
);

ListCard.propTypes = {
    list: PropTypes.object.isRequired
};

export default ListCard;
