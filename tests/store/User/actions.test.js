import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import * as actions from '../../../src/store/User/actions';
import { getJwt } from '../../../src/store/api';

const mock = new MockAdapter(axios);
let store;

describe('fetchCurrentUser', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onGet('/auth/current-user.json')
            .reply(403);

        return store.dispatch(actions.fetchCurrentUser())
            .then(() => {
                const expected = [
                    {type: actions.fetchCurrentUserRequest.toString()},
                    {type: actions.fetchCurrentUserFailure.toString()},
                    {type: actions.signOut.toString()}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onGet('/auth/current-user.json')
            .reply(200, {
                user: {id: 1, email: 'christy@myshopanalyst.com'}
            });

        return store.dispatch(actions.fetchCurrentUser())
            .then(() => {
                const expected = [
                    {type: actions.fetchCurrentUserRequest.toString()},
                    {
                        type: actions.fetchCurrentUserSuccess.toString(),
                        payload: {
                            id: 1,
                            email: 'christy@myshopanalyst.com'
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('signIn', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPost('/auth/login.json')
            .reply(500);

        return store.dispatch(actions.signIn())
            .then(() => {
                const expected = [
                    {type: actions.signInRequest.toString()},
                    {type: actions.signInFailure.toString()}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPost('/auth/login.json')
            .reply(200, {
                user: {id: 1, email: 'christy@myshopanalyst.com'},
                jwt: 'JWT_TOKEN'
            });

        return store.dispatch(actions.signIn())
            .then(() => {
                const expected = [
                    {type: actions.signInRequest.toString()},
                    {
                        type: actions.signInSuccess.toString(),
                        payload: {
                            id: 1,
                            email: 'christy@myshopanalyst.com'
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
                expect(getJwt()).toEqual('JWT_TOKEN');
            });
    });
});

describe('signUp', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPost('/users.json')
            .reply(500);

        return store.dispatch(actions.signUp())
            .then(() => {
                const expected = [
                    {type: actions.signUpRequest.toString()},
                    {type: actions.signUpFailure.toString()}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPost('/users.json')
            .reply(200, {
                user: {id: 1, email: 'christy@myshopanalyst.com'},
                jwt: 'JWT_TOKEN'
            });

        return store.dispatch(actions.signUp())
            .then(() => {
                const expected = [
                    {type: actions.signUpRequest.toString()},
                    {
                        type: actions.signUpSuccess.toString(),
                        payload: {
                            id: 1,
                            email: 'christy@myshopanalyst.com'
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
                expect(getJwt()).toEqual('JWT_TOKEN');
            });
    });
});
