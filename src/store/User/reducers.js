// Actions
import * as actions from './actions';

const user = (state = {isFetching: true}, action) => {
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
        case actions.updateSettingsSuccess.toString():
            return {
                ...action.payload,
                isFetching: false
            };

        default:
            return state;
    }
};

export default user;
