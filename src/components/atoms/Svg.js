import PropTypes from 'prop-types';
import React from 'react';

const Svg = ({ sprite }) => (
    <svg viewBox={sprite.viewBox}>
        <use xlinkHref={`#${sprite.id}`} />
    </svg>
);

Svg.propTypes = {
    sprite: PropTypes.object.isRequired
};

export default Svg;
