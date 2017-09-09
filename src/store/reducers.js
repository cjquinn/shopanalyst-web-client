import { combineReducers } from 'redux';

// Reducers
import user from './User/reducers';

const reducers = combineReducers({
    user
});

export default reducers;
