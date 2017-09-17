import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchMoreLists, fetchLists } from '../store/List/actions';

// Components
import Lists from '../components/Lists';

// Selectors
import { getIsFetching, getLists, getTotal } from '../store/List/selectors';

class ListsContainer extends Component {
    componentDidMount() {
        this.props.fetchLists();
    }

    render() {
        const { isFetching, fetchMoreLists, lists, total } = this.props;

        return (
            <Lists
                isFetching={isFetching}
                fetchMoreLists={fetchMoreLists}
                lists={lists}
                total={total}
            />
        );
    }
}

ListsContainer.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    fetchMoreLists: PropTypes.func.isRequired,
    fetchLists: PropTypes.func.isRequired,
    lists: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
    isFetching: getIsFetching(state),
    lists: getLists(state),
    total: getTotal(state)
});

const mapDispatchToProps = dispatch => ({
    fetchMoreLists: () => dispatch(fetchMoreLists()),
    fetchLists: () => dispatch(fetchLists())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListsContainer);
