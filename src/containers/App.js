import React from 'react';

import '../assets/scss/main.scss';

// Components
import Button from '../components/Button';
import Form from '../components/Form';
import ListGrid from '../components/ListGrid';
import Nav from '../components/Nav';
import Overlay from '../components/Overlay';

const App = () => (
    <div className="app">
        <input
            type="text"
            value="Shopanalyst"
            className="o-input o-type-medium u-bgcolor-off-white u-color-grey u-pv u-text-center u-z-2"
        />

        <Form>
            <Button colour="green">Save changes</Button>
        </Form>

        <Overlay />

        <div className="o-container u-pv-2 u-space-2">
            <Button colour="green">Create list</Button>

            <ListGrid />

            <Button colour="green">Load more</Button>
        </div>

        <Nav />
    </div>
);

export default App;
