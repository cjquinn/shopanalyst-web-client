import axios from 'axios';
import { forIn, isPlainObject } from 'lodash';
import { SubmissionError } from 'redux-form';

// Actions
import { signOut } from './User/actions';

// Endpoint exports
export * from './Item/endpoints';
export * from './List/endpoints';
export * from './User/endpoints';

/**
 * Function to flattern cakephp error format
 */
const formatErrors = errors => {
    let formattedErrors = {};

    forIn(errors, (error, key) => {
        if (isPlainObject(error)) {
            formattedErrors[key] = formatErrors(error);
        } else {
            // If multiple errors on one field take last error
            formattedErrors = error;
        }
    });

    return formattedErrors;
};

export const checkStatus = response => {
    if (response.status >= 200 &&
        response.status < 300
    ) {
        return response;
    }

    throw response;
};

export const handleError = (dispatch, failure) => response => {
    dispatch(failure());

    switch (response.status) {
        case 400:
            throw new SubmissionError(formatErrors(response.data.errors));

        case 403:
            return dispatch(signOut());

        case 404:
            throw response;

        default:
            console.log(response);
            // 500 or any other thang
    }
};

/**
 * An instance of axios to use for all requests
 */
export const instance = () => axios.create({
    baseURL: 'http://192.168.99.100',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        ...(
            getJwt()
                ? {Authorization: `Bearer ${getJwt()}`}
                : {}
        )
    },
    validateStatus: () => true
});

const JWT = 'jwt';

export const getJwt = () => window.localStorage.getItem(JWT);

export const setJwt = response => {
    if (response.data.jwt) {
        window.localStorage.setItem(JWT, response.data.jwt);
    }

    return response;
};

export const removeJwt = () => window.localStorage.removeItem(JWT);
