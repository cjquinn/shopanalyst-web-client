import React from 'react';
import { Switch } from 'react-router-dom';

// Layouts
import Auth from '../layouts/Auth';
import Default from '../layouts/Default';

// Screens
import LoginScreen from '../screens/LoginScreen';

const App = () => (
    <Switch>
        <Auth path="/login" component={LoginScreen} />
    </Switch>
);

export default App;
