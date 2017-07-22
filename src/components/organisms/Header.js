import React from 'react';
import styled from 'styled-components';

// Components
import Brand from '../atoms/Brand';
import User from '../atoms/User';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${({ theme }) => `
        padding: ${theme.base.spacing.single};
        background: ${theme.organisms.Header.background};
    `}
`;

const Header = () => (
    <Container>
        <Brand />

        <User />
    </Container>
);

export default Header;
