import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Svg from './Svg';

// Spites
import analyse from '../assets/svg/analyse.svg';
import settings from '../assets/svg/settings.svg';
import shop from '../assets/svg/shop.svg';

const Nav = ({ getClasses }) => (
    <nav className="nav u-fixed u-width-full">
        <ul className="tabs u-bgcolor-pale-green u-text-center">
            <li className={`tabs__tab ${getClasses('lists')}`}>
                <Link
                    className="tabs__tab__link o-type-small u-color-grey"
                    to="/lists"
                >
                    <Svg className="tabs__tab__icon" sprite={shop} />
                    Shop
                </Link>
            </li>

            <li className={`tabs__tab ${getClasses('analyse')}`}>
                <Link
                    className="tabs__tab__link o-type-small u-color-grey"
                    to="/analyse"
                >
                    <Svg className="tabs__tab__icon" sprite={analyse} />
                    Analyse
                </Link>
            </li>

            <li className={`tabs__tab ${getClasses('settings')}`}>
                <Link
                    className="tabs__tab__link o-type-small u-color-grey"
                    to="/settings"
                >
                    <Svg className="tabs__tab__icon" sprite={settings} />
                    Settings
                </Link>
            </li>
        </ul>
    </nav>
);

Nav.propTypes = {
    getClasses: PropTypes.func.isRequired
};

export default Nav;
