import React from 'react';

import '../assets/scss/main.scss';

// Components
import Button from '../components/Button';
import Form from '../components/Form';
import Header from '../components/Header';
import LabeledInput from '../components/LabeledInput';
import ListGrid from '../components/ListGrid';
import Nav from '../components/Nav';
import Overlay from '../components/Overlay';

const App = () => (
    <div className="app">
        <Header />

        <Form>
            <LabeledInput />

            <Button colour="green">Create List</Button>
        </Form>

        <Overlay />        

        <div className="o-container u-pv-2">
            <ListGrid />

            <Button className="u-mt-2" colour="green">Load more</Button>
        </div>

        <Nav />
    </div>
);

export default App;
