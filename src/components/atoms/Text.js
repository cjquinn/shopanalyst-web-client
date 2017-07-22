import styled from 'styled-components';

const Text = styled.p`
    ${({ small, theme }) => small && `
        font-size: ${theme.font.small};
    `}
`;

export default Text;
