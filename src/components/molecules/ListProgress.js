import React from 'react';

// Components
import ProgressBar from '../atoms/ProgressBar';

const Container = ProgressBar.extend`
    position: relative;
    ${({ theme }) => `
        background: ${theme.molecules.ListProgress.container.background};
        border: 1px solid ${theme.molecules.ListProgress.container.borderColour};
    `}
`;

const Inner = ProgressBar.extend`
    position: absolute;
    left: 0;
    top: 0;
    width: 10%;
    white-space: nowrap;
    overflow: hidden;
    ${({ theme }) => `
        background: ${theme.molecules.ListProgress.inner.background};
        color: ${theme.molecules.ListProgress.inner.colour};
    `}
`;

const ListProgress = () => (
    <Container>
        1/10 items
        <Inner>1/10 items</Inner>
    </Container>
);

export default ListProgress;
