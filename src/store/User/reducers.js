// Actions
import * as actions from './actions';

const user = (state = {isLoading: true}, action) => {
    switch (action.type) {
        case actions.fetchCurrentUserRequest.toString():
            return {
                ...state,
                isLoading: true
            };

        case actions.fetchCurrentUserFailure.toString():
            return {
                ...state,
                isLoading: false
            };

        case actions.fetchCurrentUserSuccess.toString():
        case actions.signInSuccess.toString():
        case actions.signUpSuccess.toString():
        case actions.updateSettingsSuccess.toString():
            return {
                ...action.payload,
                isLoading: false
            };

        default:
            return state;
    }
};

export default user;
