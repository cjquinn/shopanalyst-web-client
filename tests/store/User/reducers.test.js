import reducers from '../../../src/store/User/reducers';

import * as actions from '../../../src/store/User/actions';

describe('initial state', () => {
    it('shape', () => {
        const expected = {isFetching: false};

        expect(reducers(undefined, {})).toEqual(expected);
    });
});

describe('fetchCurrentUser', () => {
    it(actions.fetchCurrentUserRequest.toString(), () => {
        const state = {isFetching: false};

        const expected = {isFetching: true};

        expect(reducers(state, actions.fetchCurrentUserRequest())).toEqual(expected);
    });

    it(actions.fetchCurrentUserFailure.toString(), () => {
        const state = {isFetching: true};

        const expected = {isFetching: false};

        expect(reducers(state, actions.fetchCurrentUserFailure())).toEqual(expected);
    });

    it(actions.fetchCurrentUserSuccess.toString(), () => {
        const state = {isFetching: true};

        const expected = {
            id: 1,
            email: 'christy@myshopanalyst.com',
            isFetching: false
        };

        const payload = {
            id: 1,
            email: 'christy@myshopanalyst.com'
        };

        expect(reducers(state, actions.fetchCurrentUserSuccess(payload))).toEqual(expected);
    });
});

describe('signIn', () => {
    it(actions.signInSuccess.toString(), () => {
        const state = {};

        const expected = {
            id: 1,
            email: 'christy@myshopanalyst.com',
            isFetching: false
        };

        const payload = {
            id: 1,
            email: 'christy@myshopanalyst.com'  
        };

        expect(reducers(state, actions.signInSuccess(payload))).toEqual(expected);
    });
});

describe('signUp', () => {
    it(actions.signUpSuccess.toString(), () => {
        const state = {};

        const expected = {
            id: 1,
            email: 'christy@myshopanalyst.com',
            isFetching: false
        };

        const payload = {
            id: 1,
            email: 'christy@myshopanalyst.com'  
        };

        expect(reducers(state, actions.signUpSuccess(payload))).toEqual(expected);
    });
});
