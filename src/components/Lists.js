import PropTypes from 'prop-types';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';

// Components
import ListCard from './ListCard';
import Loading from './Loading';
import Splash from '../components/Splash';

const Lists = ({ handleScrollLists, isFetching, lists, match, total }) => (
    <div className="u-space-2">
        {lists.length === 0 &&
            (isFetching
                ? <Splash>Loading...</Splash>
                : <p className="o-type-medium u-color-brown u-text-center">
                    Once you&#039;ve <Link className="o-link" to={`${match.url}/create`}>created a list</Link> it will show here
                </p>
            )
        }

        {lists.length > 0 &&
            <InfiniteScroll
                loadMore={handleScrollLists}
                hasMore={lists.length < total}
                initialLoad={false}
            >
                <ul className="o-list o-list--block">
                    {lists.map(list => (
                        <li className="o-list__item" key={list.id}>
                            <ListCard
                                list={list}
                                match={match}
                            />
                        </li>
                    ))}
                </ul>

                {isFetching &&
                    <div className="o-circle u-hover-success u-flex u-ai-center u-jc-center u-mt u-mh-auto">
                        <Loading />
                    </div>
                }
            </InfiniteScroll>
        }
    </div>
);

Lists.propTypes = {
    handleScrollLists: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lists: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired
};

export default Lists;
