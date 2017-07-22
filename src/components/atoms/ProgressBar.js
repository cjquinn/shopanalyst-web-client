import React from 'react';
import styled from 'styled-components';

const Base = styled.div`
    ${({ theme }) => `
        padding-left: ${theme.atoms.ProgressBar.radius};
        border-radius: ${theme.atoms.ProgressBar.radius};
        line-height: ${theme.atoms.ProgressBar.height};
        font-size: ${theme.font.small};
    `}
`;

const Container = Base.extend`
    position: relative;
    ${({ theme }) => `
        background: ${theme.atoms.ProgressBar.container.background};
        border: 1px solid ${theme.atoms.ProgressBar.container.borderColour};
    `}
`;

const Inner = Base.extend`
    position: absolute;
    left: 0;
    top: 0;
    width: 10%;
    white-space: nowrap;
    overflow: hidden;
    ${({ theme }) => `
        background: ${theme.atoms.ProgressBar.inner.background};
        color: ${theme.atoms.ProgressBar.inner.colour};
    `}
`;

const ProgressBar = () => (
    <Container>
        1/10 items
        <Inner>1/10 items</Inner>
    </Container>
);

export default ProgressBar;
