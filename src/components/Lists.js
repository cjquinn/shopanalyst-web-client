import PropTypes from 'prop-types';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// Components
import ListCard from './ListCard';

const Lists = ({ isFetching, fetchMoreLists, lists, match, total }) => (
    <div className="u-space-2">
        {lists.length === 0 && !isFetching &&
            <p className="o-type-medium u-color-brown u-text-center">
                Once you&#039;ve <Link className="o-link" to={`${match.url}/create`}>created a list</Link> it will show here
            </p>
        }

        {lists.length > 0 &&
            <ul className="o-list o-list--block">
                {lists.map((list, index) => (
                    <ListCard
                        key={index}
                        baseUrl={match.url}
                        list={list}
                    />
                ))}
            </ul>
        }

        {lists.length < total &&
            <button
                className="o-button"
                type="button"
                onClick={fetchMoreLists}
                disabled={isFetching}
            >
                Load more
            </button>
        }
    </div>
);

Lists.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    fetchMoreLists: PropTypes.func.isRequired,
    lists: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired
};

export default withRouter(Lists);
