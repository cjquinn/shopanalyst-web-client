import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchList } from '../store/List/actions';

// Api
import { handle404 } from '../store/api';

// Screens
import ListScreen from '../screens/ListScreen';

// Selectors
import { getList } from '../store/List/selectors';

class ListScreenContainer extends Component {
    componentDidMount() {
        const { fetchList, history } = this.props;

        fetchList().catch(handle404(history));
    }

    handleFocusAddItems = () => this.props.history.push(`${this.props.match.url}/add-items`);

    render() {
        const { list, match } = this.props;

        return (
            <ListScreen
                handleFocusAddItems={this.handleFocusAddItems}
                list={list}
                match={match}
            />
        );
    }
}

ListScreenContainer.propTypes = {
    fetchList: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    list: PropTypes.object,
    match: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
    list: getList(ownProps.match.params.id)(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchList: () => dispatch(fetchList(ownProps.match.params.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListScreenContainer);
