import { createAction } from 'redux-actions';

/**
 * Current User
 */
export const fetchCurrentUserRequest = createAction('FETCH_CURRENT_USER_REQUEST');
export const fetchCurrentUserSuccess = createAction('FETCH_CURRENT_USER_SUCCESS');
export const fetchCurrentUserFailure = createAction('FETCH_CURRENT_USER_FAILURE');

export const fetchCurrentUser = () => (dispatch, getState, api) => {
    dispatch(fetchCurrentUserRequest());

    if (!api.getJwt()) {
        return dispatch(fetchCurrentUserFailure());
    }

    return api.fetchCurrentUser()
        .then(api.checkStatus)
        .then(response => dispatch(fetchCurrentUserSuccess(response.data.user)))
        .catch(api.handleError(dispatch, fetchCurrentUserFailure));
};

/**
 * Sign in
 */
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

/**
 * Sign out
 */
export const signOut = createAction('SIGN_OUT');

/**
 * Sign up
 */
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

/**
 * Update Settings
 */
export const updateSettingsRequest = createAction('UPDATE_SETTINGS_REQUEST');
export const updateSettingsSuccess = createAction('UPDATE_SETTINGS_SUCCESS');
export const updateSettingsFailure = createAction('UPDATE_SETTINGS_FAILURE');

export const updateSettings = data => (dispatch, getState, api) => {
    dispatch(updateSettingsRequest());

    return api.updateSettings(data)
        .then(api.checkStatus)
        .then(response => dispatch(updateSettingsSuccess(response.data.user)))
        .catch(api.handleError(dispatch, updateSettingsFailure));
};
