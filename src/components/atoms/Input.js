import styled from 'styled-components';

const Input = styled.input`
    display: block;
    width: 100%;
    box-sizing: border-box;
    border: 0;
    border-radius: 5px;
    ${({ theme }) => `
        padding: ${theme.base.spacing.single};
        background: ${theme.atoms.Input.default.background};
        color: ${theme.base.colour};
        font: ${theme.base.fontSize} ${theme.base.fontFamily};

        &:focus {
            box-shadow: 0px 0px 0px 1px ${theme.atoms.Input.default.outline};
            outline: none;
        }

        &::placeholder {
            color: ${theme.atoms.Input.default.placeholder.colour};
            font-style: italic;
        }
    `}
`;

export default Input;
