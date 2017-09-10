import * as actions from './actions';

const user = (state = {}, action) => {
    switch (action.type) {
        case actions.signUpSuccess.toString():
            return action.payload;

        default:
            return state;
    }
};

export default user;
