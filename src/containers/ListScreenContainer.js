import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchList } from '../store/List/actions';

// Screens
import ListScreen from '../screens/ListScreen';

// Selectors
import { getList } from '../store/List/selectors';

class ListScreenContainer extends Component {
    componentDidMount() {
        const { fetchList, history } = this.props;

        fetchList().catch(() => history.replace('/not-found'));
    }

    render() {
        const { list, location, match } = this.props;

        return (
            <ListScreen
                list={list}
                location={location}
                match={match}
            />
        );
    }
}

ListScreenContainer.propTypes = {
    fetchList: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    list: PropTypes.object,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
    list: getList(ownProps.match.params.id)(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchList: () => dispatch(fetchList(ownProps.match.params.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListScreenContainer);
