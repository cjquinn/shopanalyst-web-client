// Actions
import * as actions from './actions';

const user = (state = {isFetching: false}, action) => {
    switch (action.type) {
        case actions.fetchCurrentUserRequest.toString():
            return {
                ...state,
                isFetching: true
            };

        case actions.fetchCurrentUserFailure.toString():
            return {
                ...state,
                isFetching: false
            };

        case actions.fetchCurrentUserSuccess.toString():
        case actions.signInSuccess.toString():
        case actions.signUpSuccess.toString():
            return {
                ...action.payload,
                isFetching: false
            };

        default:
            return state;
    }
};

export default user;
