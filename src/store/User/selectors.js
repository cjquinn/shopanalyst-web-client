import { createSelector } from 'reselect';

export const getEmail = state => state.user.email;

export const getIsAuthorised = createSelector(
    state => state.user.id,
    id => id !== undefined
);

export const getIsLoading = state => state.user.isLoading;
