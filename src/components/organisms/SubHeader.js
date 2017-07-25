import React from 'react';
import styled from 'styled-components';

// Components
import Button from '../atoms/Button';
import Heading from '../atoms/Heading';

const Container = styled.div`
    position: relative;
    display: flex;
    z-index: 2;
    align-items: center;
    justify-content: space-between;
    ${({ theme }) => `
        padding: ${theme.base.spacing.double} ${theme.base.spacing.single};
        background: ${theme.organisms.SubHeader.background};
    `}
`;

const SubHeader = () => (
    <Container>
        <Heading>Lists</Heading>

        <Button>Create list</Button>
    </Container>
);

export default SubHeader;
