import React from 'react';

import '../assets/scss/main.scss';

// Components
import Button from '../components/Button';
import Header from '../components/Header';
import Nav from '../components/Nav';

const App = () => (
    <div className="app">
        <Header />

        <div className="o-container u-pv-2">
            <Button colour="green">Add items</Button>

            <div className="list-meta u-pv-2">
                <span className="o-type-small">4/8 items</span>
                <span className="o-type-small u-color-brown">20th Jun</span>
            </div>

            <ul className="items">
                <li>
                    <input
                        id="item-1"
                        type="checkbox"
                        className="u-hidden"
                    />

                    <label
                        htmlFor="item-1"
                        className="item u-bgcolor-white"
                    >
                        Item

                        <div className="item__actions">
                            <button
                                type="button"
                                className="item__actions__button item__actions__button--decrease u-bgcolor-green u-color-white"
                            >+</button>

                            <input
                                type="number"
                                className="item__actions__input o-input u-text-center u-bgcolor-pale-grey u-color-grey"
                                value="2"
                            />

                            <button
                                type="button"
                                className="item__actions__button item__actions__button--increase u-bgcolor-green u-color-white"
                            >-</button>
                        </div>
                    </label>
                </li>

                <li className="u-mt">
                    <input
                        id="item-2"
                        type="checkbox"
                        className="u-hidden"
                        checked="checked"
                    />

                    <label
                        htmlFor="item-2"
                        className="item u-bgcolor-white"
                    >
                        Item

                        <span className="item__value o-type-small u-text-center">2</span>
                    </label>
                </li>
            </ul>
        </div>

        <Nav />
    </div>
);

export default App;
