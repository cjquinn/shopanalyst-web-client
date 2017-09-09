import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Routes
import AppLayout from '../layouts/AppLayout';

class App extends Component {
    render() {
        return (
            <Router>
                <AppLayout authorised={false} />
            </Router>
        );
    }
}

export default App;
