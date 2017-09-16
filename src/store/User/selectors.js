export const getIsAuthorised = state => state.user.id !== undefined;

export const getIsFetching = state => state.user.isFetching;
