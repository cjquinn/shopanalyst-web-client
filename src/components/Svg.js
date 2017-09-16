import PropTypes from 'prop-types';
import React from 'react';

const Svg = ({ className, sprite }) => (
    <svg className={`o-svg o-svg--${sprite.id} ${className}`} viewBox={sprite.viewBox}>
        <use xlinkHref={`#${sprite.id}`} />
    </svg>
);

Svg.propTypes = {
    className: PropTypes.string,
    sprite: PropTypes.object.isRequired
};

export default Svg;
