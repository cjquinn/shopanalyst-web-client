import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

// Api
import { removeJwt } from './api';

// Actions
import { signOut } from './User/actions';

// Reducers
import user from './User/reducers';

const app = combineReducers({
    form,
    user
});

const reducers = (state, action) => {
    if (action.type === signOut.toString()) {
        removeJwt();

        // Only undefine state from this app
        state.user = undefined;
    }

    return app(state, action);
};

export default reducers;
