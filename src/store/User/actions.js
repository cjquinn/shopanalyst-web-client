import { createAction } from 'redux-actions';

export const createUserRequest = createAction('CREATE_USER_REQUEST');
export const createUserSuccess = createAction('CREATE_USER_SUCCESS');
export const createUserFailure = createAction('CREATE_USER_FAILURE');

export const createUser = data => (dispatch, getState, api) => {
    dispatch(createUserRequest());

    return api.createUser(data)
        .then(api.checkStatus)
        .then(api.setJwt)
        .then(response => dispatch(createUserSuccess(response.data.user)))
        .catch(api.handleError(dispatch, createUserFailure));
};
