import { createAction } from 'redux-actions';

export const signInRequest = createAction('SIGN_IN_REQUEST');
export const signInSuccess = createAction('SIGN_IN_SUCCESS');
export const signInFailure = createAction('SIGN_IN_FAILURE');

export const signIn = data => (dispatch, getState, api) => {
    dispatch(signInRequest());

    return api.signIn(data)
        .then(api.checkStatus)
        .then(api.setJwt)
        .then(response => dispatch(signInSuccess(response.data.user)))
        .catch(api.handleError(dispatch, signInFailure));
};

export const signUpRequest = createAction('SIGN_UP_REQUEST');
export const signUpSuccess = createAction('SIGN_UP_SUCCESS');
export const signUpFailure = createAction('SIGN_UP_FAILURE');

export const signUp = data => (dispatch, getState, api) => {
    dispatch(signUpRequest());

    return api.signUp(data)
        .then(api.checkStatus)
        .then(api.setJwt)
        .then(response => dispatch(signUpSuccess(response.data.user)))
        .catch(api.handleError(dispatch, signUpFailure));
};
