import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Svg from './Svg';
import Template from './Template';

// Spites
import analyse from '../assets/svg/analyse.svg';
import settings from '../assets/svg/settings.svg';
import shop from '../assets/svg/shop.svg';

const Nav = ({ getClasses }) => (
    <Template>
        <div className="u-baseline-x6" />
        <nav className="c-nav u-fixed u-1/1 u-z">
            <div className="c-tabs o-type-small u-flex u-baseline-x6">
                <Link
                    className={`c-tabs__tab u-1/3 u-color-inherit u-flex u-fd-col u-jc-between u-ai-center ${getClasses('lists')}`}
                    to="/lists"
                >
                    <Svg className="u-1/1 u-baseline-x3" sprite={shop} />
                    <span>Shop</span>
                </Link>

                <Link
                    className={`c-tabs__tab u-1/3 u-color-inherit u-flex u-fd-col u-jc-between u-ai-center ${getClasses('analyse')}`}
                    to="/analyse"
                >
                    <Svg className="u-1/1 u-baseline-x3" sprite={analyse} />
                    <span>Analyse</span>
                </Link>

                <Link
                    className={`c-tabs__tab u-1/3 u-color-inherit u-flex u-fd-col u-jc-between u-ai-center ${getClasses('settings')}`}
                    to="/settings"
                >
                    <Svg className="u-1/1 u-baseline-x3" sprite={settings} />
                    <span>Settings</span>
                </Link>
            </div>
        </nav>
    </Template>
);

Nav.propTypes = {
    getClasses: PropTypes.func.isRequired
};

export default Nav;
