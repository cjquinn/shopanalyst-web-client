import React from 'react';
import styled from 'styled-components';

// Components
import Help from '../atoms/Help';
import ProgressBar from '../atoms/ProgressBar';
import Text from '../atoms/Text';

const Container = styled.div`
    border-radius: 5px;
    ${({ theme }) => `
        margin-bottom: ${theme.base.spacing.single};
        padding: ${theme.base.spacing.single};
        background: ${theme.molecules.ListCard.background};
        border: 1px solid ${theme.molecules.ListCard.borderColour};
    `}
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${({ theme }) => `
        margin-bottom: ${theme.base.spacing.single};
    `}
`;

const ListCard = () => (
    <Container>
        <Header>
            <Text>Weekly shop</Text>

            <Help small>20th Jun</Help>
        </Header>

        <ProgressBar />
    </Container>
);

export default ListCard;
