import styled from 'styled-components';

const Overlay = styled.div`
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    ${({ theme }) => `
        background: ${theme.atoms.Overlay.background};
    `}
`;

export default Overlay;
