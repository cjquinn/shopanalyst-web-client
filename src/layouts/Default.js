import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Header from '../components/Header';
import Nav from '../components/Nav';

const Default = ({ component: Component, ...rest }) => (
    <Route {...rest} render={matchProps => (
        <div className="app">
            <Header />

            <Component {...matchProps} />

            <Nav />
        </div>
    )} />
);

Default.propTypes = {
    component: PropTypes.node.isRequired
};

export default Default;
