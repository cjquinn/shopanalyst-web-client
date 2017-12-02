import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const ListCard = ({ list, match }) => (
    <Link
        to={`${match.url}/${list.id}`}
        className="c-list-card u-p u-bgcolor-foreground u-block u-b u-bradius"
    >
        <div className="u-flex u-ai-center u-jc-between u-mb">
            <h4 className="u-weight-normal">{list.name}</h4>
            <span className="o-type-medium u-color-help">{list.date}</span>
        </div>

        <div className="o-type-medium u-baseline-x3 u-bgcolor-input u-color-help u-relative u-flex u-ai-center u-ph u-bradius-x3 u-b">
            {list.itemsProgress}

            {list.progress > 0 &&
                <div
                    className="c-list-card__progress u-absolute u-flex u-ai-center u-bgcolor-success-background u-ph u-color-success u-bradius-x3"
                    style={{width: `${list.progress}%`}}
                >
                    {list.itemsProgress}
                </div>
            }
        </div>
    </Link>
);

ListCard.propTypes = {
    list: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
};

export default ListCard;
