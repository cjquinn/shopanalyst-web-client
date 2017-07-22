import React from 'react';
import styled from 'styled-components';

// Components
import Svg from './Svg';

// Sprites
import logo from '../../assets/svg/logo.svg';

const Container = styled.a`
    flex-basis: 100px;
`;

const Brand = () => (
    <Container>
        <Svg sprite={logo} />
    </Container>
);

export default Brand;
