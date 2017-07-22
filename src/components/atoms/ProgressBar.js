import styled from 'styled-components';

const ProgressBar = styled.div`
    ${({ theme }) => `
        padding-left: ${theme.atoms.ProgressBar.radius};
        border-radius: ${theme.atoms.ProgressBar.radius};
        line-height: ${theme.atoms.ProgressBar.height};
        font-size: ${theme.font.small};
    `}
`;

export default ProgressBar;
