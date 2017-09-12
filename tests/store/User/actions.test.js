import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import * as actions from '../../../src/store/User/actions';

const mock = new MockAdapter(axios);

describe('signIn', () => {
    afterEach(() => mock.reset());

    it('failure', () => {
        const store = global.configureStore({user: {}});

        mock
            .onPost('/login.json')
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
        const store = global.configureStore({user: {}});

        mock
            .onPost('/login.json')
            .reply(200, {
                user: {id: 1, email: 'christy@shopanalyst.com'},
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
                            email: 'christy@shopanalyst.com'
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
                expect(global.localStorage.getItem('jwt')).toEqual('JWT_TOKEN');
            });
    });
});

describe('signUp', () => {
    afterEach(() => mock.reset());

    it('failure', () => {
        const store = global.configureStore({user: {}});

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
        const store = global.configureStore({user: {}});

        mock
            .onPost('/users.json')
            .reply(200, {
                user: {id: 1, email: 'christy@shopanalyst.com'},
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
                            email: 'christy@shopanalyst.com'
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
                expect(global.localStorage.getItem('jwt')).toEqual('JWT_TOKEN');
            });
    });
});
