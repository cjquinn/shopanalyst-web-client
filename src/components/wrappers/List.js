import styled from 'styled-components';

const List = styled.div`
    ${({ theme }) => `
        padding-bottom: ${theme.base.spacing.single};
    `}
`;

export default List;
