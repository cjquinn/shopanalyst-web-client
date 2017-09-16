import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

// Components
import Svg from './Svg';

// Spites
import analyse from '../assets/svg/analyse.svg';
import settings from '../assets/svg/settings.svg';
import shop from '../assets/svg/shop.svg';

const Nav = ({ location }) => (
    <nav className="nav u-fixed u-width-full">
        <ul className="tabs u-bgcolor-pale-green u-uppercase u-text-center">
            <li className={`tabs__tab ${location.pathname.indexOf('lists') !== -1 && 'tabs__tab--active u-bgcolor-off-white'}`}>
                <Link
                    className="tabs__tab__link o-type-medium u-color-grey"
                    to="/lists"
                >
                    <Svg className="tabs__tab__icon" sprite={shop} />
                    Shop
                </Link>
            </li>

            <li className={`tabs__tab ${location.pathname.indexOf('analyse') !== -1 && 'tabs__tab--active u-bgcolor-off-white'}`}>
                <Link
                    className="tabs__tab__link o-type-medium u-color-grey"
                    to="/analyse"
                >
                    <Svg className="tabs__tab__icon" sprite={analyse} />
                    Analyse
                </Link>
            </li>

            <li className={`tabs__tab ${location.pathname.indexOf('settings') !== -1 && 'tabs__tab--active u-bgcolor-off-white'}`}>
                <Link
                    className="tabs__tab__link o-type-medium u-color-grey"
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
    location: PropTypes.object.isRequired
};

export default withRouter(Nav);
