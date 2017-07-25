import React from 'react';
import styled from 'styled-components';

// Components
import Button from '../atoms/Button';

import LabeledInput from '../molecules/LabeledInput';

const Container = styled.div`
    position: relative;
    z-index: 2;
    ${({ theme }) => `
        padding: ${theme.base.spacing.double} ${theme.base.spacing.single};
        background: ${theme.organisms.Form.background};
    `}
`;

const CreateListForm = () => (
    <Container>
        <LabeledInput />

        <Button block>Create list</Button>
    </Container>
);

export default CreateListForm;
