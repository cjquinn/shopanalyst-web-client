import PropTypes from 'prop-types';
import React from 'react';

// Components
import Items from '../components/Items';

const List = ({ list }) => {
    if (!list) {
        return <h1>Not FOUND</h1>;
    }

    return (
        <div>
            <div className="list-meta">
                <span className="o-type-small">
                    {list.itemsProgress}
                </span>

                <span className="o-type-small u-color-brown">
                    {list.date}
                </span>
            </div>

            <Items items={list.list_items} />

            <button className="o-button" type="button">
                Duplicate list
            </button>
        </div>
    );
};

List.propTypes = {
    list: PropTypes.object
};

export default List;
