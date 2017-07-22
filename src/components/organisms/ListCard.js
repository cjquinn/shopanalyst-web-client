import React from 'react';
import styled from 'styled-components';

// Components
import ListCardHeader from '../molecules/ListCardHeader';
import ListProgress from '../molecules/ListProgress';

const Container = styled.div`
    border-radius: 5px;
    ${({ theme }) => `
        margin-bottom: ${theme.base.spacing.single};
        padding: ${theme.base.spacing.single};
        background: ${theme.organisms.ListCard.background};
        border: 1px solid ${theme.organisms.ListCard.borderColour};
    `}
`;

const ListCard = () => (
    <Container>
        <ListCardHeader />

        <ListProgress />
    </Container>
);

export default ListCard;
