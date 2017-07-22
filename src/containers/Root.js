import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import App from './App';
import theme from '../theme';

class Root extends Component {
    render() {
        const { store } = this.props;

        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </Provider>
        );
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
