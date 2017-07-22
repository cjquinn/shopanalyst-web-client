import React from 'react';
import styled from 'styled-components';

// Components
import Svg from './Svg';

// Sprites
import user from '../../assets/svg/user.svg';

const Container = styled.a`
    flex-basis: 24px;
`;

const User = () => (
    <Container>
        <Svg sprite={user} />
    </Container>
);

export default User;
