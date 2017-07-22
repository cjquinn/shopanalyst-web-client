import styled from 'styled-components';

const Button = styled.button`
    padding: 0 30px;
    border: 0;
    border-radius: 15px;
    line-height: 30px;
    ${({ block, theme }) => `
        background: ${theme.atoms.Button.primary.background};
        color: ${theme.atoms.Button.default.colour};
        font-size: ${theme.atoms.Button.default.fontSize};
        ${block && 'width: 100%;'}
    `}
`;

export default Button;
