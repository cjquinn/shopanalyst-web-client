import React from 'react';
import styled from 'styled-components';

// Components
import Button from '../atoms/Button';

import ListCard from '../molecules/ListCard';

const Container = styled.div`
    ${({ theme }) => `
        padding-bottom: ${theme.base.spacing.single};
    `}
`;

const ListStream = () => (
    <div>
        <Container>
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
        </Container>

        <Button block>Load more</Button>
    </div>
);

export default ListStream;
