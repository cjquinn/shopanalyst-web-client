import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

// Actions
import { fetchCurrentUser } from '../store/User/actions';

// Routes
import AppLayout from '../layouts/AppLayout';

// Selectors
import { getIsLoading } from '../store/User/selectors';

class App extends Component {
    componentDidMount() {
        this.props.fetchCurrentUser();
    }

    render() {
        const { isLoading } = this.props;

        return (
            <Router>
                <AppLayout isLoading={isLoading} />
            </Router>
        );
    }
}

App.propTypes = {
    fetchCurrentUser: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isLoading: getIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
    fetchCurrentUser: () => dispatch(fetchCurrentUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
