import React from 'react';
import styled from 'styled-components';

// Components
import Input from '../atoms/Input';
import Label from '../atoms/Label';

const Container = styled.div`
    ${({ theme }) => `
        padding-bottom: ${theme.base.spacing.double};
    `}
`;

const LabeledInput = () => (
    <Container>
        <Label>Name</Label>

        <Input placeholder="Enter a name..." />
    </Container>
);

export default LabeledInput;
