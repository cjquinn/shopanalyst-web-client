import { createAction } from 'redux-actions';

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
