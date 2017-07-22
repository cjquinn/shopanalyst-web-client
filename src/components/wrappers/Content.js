import styled from 'styled-components';

const Content = styled.div`
    ${({ theme }) => `
        padding: ${theme.base.spacing.double} ${theme.base.spacing.single};
    `}
`;

export default Content;
