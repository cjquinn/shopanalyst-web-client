import styled from 'styled-components';

const Label = styled.label`
    display: block;
    ${({ theme }) => `
        margin-bottom: ${theme.base.spacing.single};
    `}
`;

export default Label;
