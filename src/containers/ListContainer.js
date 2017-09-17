import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// Actions
import { fetchList } from '../store/List/actions';

// Components
import List from '../components/List';

// Selectors
import { getList } from '../store/List/selectors';

class ListContainer extends Component {
    componentDidMount() {
        this.props.fetchList();
    }

    render() {
        const { list } = this.props;

        return <List list={list} />;
    }
}

ListContainer.propTypes = {
    fetchList: PropTypes.func.isRequired,
    list: PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({
    list: getList(ownProps.match.params.id)(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchList: () => dispatch(fetchList(ownProps.match.params.id))
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ListContainer)
);
