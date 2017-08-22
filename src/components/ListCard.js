import React from 'react';

const ListCard = () => (
    <div className="list-card u-p u-bgcolor-white">
        <div className="list-card__header u-mb">
            <h4 className="u-weight-normal">Weekly shop</h4>
            <span className="o-type-small u-color-brown">20th Jun</span>
        </div>

        <div className="list-card__progress list-card__progress--container o-type-small u-bgcolor-off-white">
            8/10 items

            <div className="list-card__progress list-card__progress--inner u-bgcolor-green u-color-white">8/10 items</div>
        </div>
    </div>
);

export default ListCard;
