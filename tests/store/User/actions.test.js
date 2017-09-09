import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import * as actions from '../../../src/store/User/actions';

describe('createUser', () => {
    const mock = new MockAdapter(axios);

    afterEach(() => mock.reset());

    it('failure', () => {
        const store = global.configureStore({user: {}});

        mock
            .onPost('/users.json')
            .reply(500);

        return store.dispatch(actions.createUser())
            .then(() => {
                const expected = [
                    {type: actions.createUserRequest.toString()},
                    {type: actions.createUserFailure.toString()}
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

        return store.dispatch(actions.createUser())
            .then(() => {
                const expected = [
                    {type: actions.createUserRequest.toString()},
                    {
                        type: actions.createUserSuccess.toString(),
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
