import React from 'react';
import styled from 'styled-components';

// Components
import Help from '../atoms/Help';
import Text from '../atoms/Text';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${({ theme }) => `
        margin-bottom: ${theme.base.spacing.single};
    `}
`;

const ListCardHeader = () => (
    <Container>
        <Text>Weekly shop</Text>

        <Help small>20th Jun</Help>
    </Container>
);

export default ListCardHeader;
