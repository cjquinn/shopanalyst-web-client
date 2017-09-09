import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const Nav = ({ location }) => (
    <nav className="nav u-fixed u-width-full">
        <ul className="tabs u-bgcolor-pale-green u-uppercase u-text-center">
            <li className={`tabs__tab ${location.pathname.indexOf('lists') !== -1 && 'tabs__tab--active u-bgcolor-off-white'} u-pv-2`}>
                <Link
                    className="tabs__tab__link o-type-medium u-color-grey"
                    to="/lists"
                >
                    Shop
                </Link>
            </li>

            <li className={`tabs__tab ${location.pathname.indexOf('analyse') !== -1 && 'tabs__tab--active u-bgcolor-off-white'} u-pv-2`}>
                <Link
                    className="tabs__tab__link o-type-medium u-color-grey"
                    to="/analyse"
                >
                    Analyse
                </Link>
            </li>

            <li className={`tabs__tab ${location.pathname.indexOf('settings') !== -1 && 'tabs__tab--active u-bgcolor-off-white'} u-pv-2`}>
                <Link
                    className="tabs__tab__link o-type-medium u-color-grey"
                    to="/settings"
                >
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
