import styled from 'styled-components';

const Help = styled.p`
    ${({ small, theme }) => `
        color: ${theme.atoms.Help.colour};
        font-size: ${small ? theme.font.small : theme.atoms.Help.fontSize};
    `}
`;

export default Help;
