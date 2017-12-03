import reducers from '../../../src/store/User/reducers';

import * as actions from '../../../src/store/User/actions';

describe('initial state', () => {
    it('shape', () => {
        const expected = {isLoading: true};

        expect(reducers(undefined, {})).toEqual(expected);
    });
});

describe('fetchCurrentUser', () => {
    it(actions.fetchCurrentUserRequest.toString(), () => {
        const state = {isLoading: false};

        const expected = {isLoading: true};

        expect(reducers(state, actions.fetchCurrentUserRequest())).toEqual(expected);
    });

    it(actions.fetchCurrentUserFailure.toString(), () => {
        const state = {isLoading: true};

        const expected = {isLoading: false};

        expect(reducers(state, actions.fetchCurrentUserFailure())).toEqual(expected);
    });

    it(actions.fetchCurrentUserSuccess.toString(), () => {
        const state = {isLoading: true};

        const expected = {
            id: 1,
            email: 'christy@myshopanalyst.com',
            isLoading: false
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
            isLoading: false
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
            isLoading: false
        };

        const payload = {
            id: 1,
            email: 'christy@myshopanalyst.com'  
        };

        expect(reducers(state, actions.signUpSuccess(payload))).toEqual(expected);
    });
});

describe('updateSettings', () => {
    it(actions.updateSettingsSuccess.toString(), () => {
        const state = {
            id: 1,
            email: 'christy@myshopanalyst.com',
            isLoading: false
        };

        const expected = {
            id: 1,
            email: 'christy@myshopanalyst.co.uk',
            isLoading: false
        };

        const payload = {
            id: 1,
            email: 'christy@myshopanalyst.co.uk' 
        };

        expect(reducers(state, actions.updateSettingsSuccess(payload))).toEqual(expected);
    });
});
