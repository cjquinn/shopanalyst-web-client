import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

// Routes
import AppLayout from '../layouts/AppLayout';

// Selectors
import { getIsAuthorised } from '../store/User/selectors';

class App extends Component {
    render() {
        const { isAuthorised } = this.props;

        return (
            <Router>
                <AppLayout isAuthorised={isAuthorised} />
            </Router>
        );
    }
}

App.propTypes = {
    isAuthorised: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isAuthorised: getIsAuthorised(state)
});

export default connect(mapStateToProps)(App);
