import React from 'react';

const Nav = () => (
    <nav className="nav">
        <ul className="tabs u-bgcolor-pale-green u-uppercase u-text-center">
            <li className="tabs__tab tabs__tab--active u-bgcolor-off-white u-pv-2">
                <a href="#" className="tabs__tab__link o-type-medium u-color-grey">Shop</a>
            </li>

            <li className="tabs__tab u-pv-2">
                <a href="#" className="tabs__tab__link o-type-medium u-color-grey">Analyse</a>
            </li>

            <li className="tabs__tab u-pv-2">
                <a href="#" className="tabs__tab__link o-type-medium u-color-grey">Settings</a>
            </li>
        </ul>
    </nav>
);

export default Nav;
