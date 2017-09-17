import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const ListCard = ({ baseUrl, list }) => (
    <li className="list-card o-list__item u-p u-bgcolor-white u-bradius-5">
        <Link to={`${baseUrl}/${list.id}`}>
            <div className="list-card__header u-mb">
                <h4 className="u-weight-normal">{list.name}</h4>
                <span className="o-type-small u-color-brown">{list.date}</span>
            </div>

            <div className="list-card__progress list-card__progress--container o-type-small u-bgcolor-off-white u-relative">
                {list.itemsProgress}

                {list.completeCount > 0 &&
                    <div
                        className="list-card__progress list-card__progress--inner u-absolute u-bgcolor-green u-color-white"
                        style={{width: list.progress}}
                    >
                        {list.itemsProgress}
                    </div>
                }
            </div>
        </Link>
    </li>
);

ListCard.propTypes = {
    baseUrl: PropTypes.string.isRequired,
    list: PropTypes.object.isRequired
};

export default ListCard;
