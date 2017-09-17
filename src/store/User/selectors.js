import { createSelector } from 'reselect';

export const getIsAuthorised = createSelector(
    state => state.user.id,
    id => id !== undefined
);

export const getIsFetching = createSelector(
    state => state.user.isFetching,
    isFetching => isFetching
);