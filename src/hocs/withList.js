import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchList } from '../store/List/actions';

// Api
import { handle404 } from '../store/api';

// Components
import Splash from '../components/Splash';

// Selectors
import { makeGetList } from '../store/List/selectors';

const withList = WrappedComponent => {
    class ListContainer extends Component {
        componentDidMount() {
            const { fetchList, history } = this.props;

            fetchList().catch(handle404(history));
        }

        render() {
            if (!this.props.list) {
                return <Splash>Loading...</Splash>;
            }

            return <WrappedComponent {...this.props} />;
        }
    }

    ListContainer.propTypes = {
        fetchList: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired,
        list: PropTypes.object,
        match: PropTypes.object.isRequired
    };

    const makeMapStateToProps = () => {
        const getList = makeGetList();

        return (state, ownProps) => ({
            list: getList(state, ownProps)
        });
    };

    const mapDispatchToProps = (dispatch, ownProps) => ({
        fetchList: () => dispatch(fetchList(ownProps.match.params.id))
    });

    return connect(makeMapStateToProps, mapDispatchToProps)(ListContainer);
};

export default withList;
