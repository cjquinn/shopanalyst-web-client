import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Actions
import * as actions from '../../../src/store/User/actions';

// Api
import { getJwt, setJwt } from '../../../src/store/api';

const mock = new MockAdapter(axios);
let store;

describe('fetchCurrentUser', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure no jwt', () => {
        mock
            .onGet('/auth/current-user.json')
            .reply(403);

        store.dispatch(actions.fetchCurrentUser());

        const expected = [
            {type: actions.fetchCurrentUserRequest.toString()},
            {type: actions.fetchCurrentUserFailure.toString()}
        ];

        expect(store.getActions()).toEqual(expected);
    });

    it('failure with jwt', () => {
        mock
            .onGet('/auth/current-user.json')
            .reply(403);

        setJwt({data: {jwt: 'JWT_TOKEN'}});

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

        setJwt({data: {jwt: 'JWT_TOKEN'}});

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

describe('requestPasswordReset', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPost('/auth/request-password-reset.json')
            .reply(500);

        return store.dispatch(actions.requestPasswordReset())
            .catch(() => {
                const expected = [
                    {type: actions.requestPasswordResetRequest.toString()},
                    {type: actions.requestPasswordResetFailure.toString()}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPost('/auth/request-password-reset.json')
            .reply(200);

        return store.dispatch(actions.requestPasswordReset())
            .then(() => {
                const expected = [
                    {type: actions.requestPasswordResetRequest.toString()},
                    {type: actions.requestPasswordResetSuccess.toString()}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('resetPassword', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPatch('/auth/reset-password.json?token=123')
            .reply(500);

        return store.dispatch(actions.resetPassword(123))
            .catch(() => {
                const expected = [
                    {type: actions.resetPasswordRequest.toString()},
                    {type: actions.resetPasswordFailure.toString()}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPatch('/auth/reset-password.json?token=123')
            .reply(200);

        return store.dispatch(actions.resetPassword(123))
            .then(() => {
                const expected = [
                    {type: actions.resetPasswordRequest.toString()},
                    {type: actions.resetPasswordSuccess.toString()}
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
            .catch(() => {
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
            .catch(() => {
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

describe('updateSettings', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPatch('/users/settings.json')
            .reply(403);

        return store.dispatch(actions.updateSettings())
            .then(() => {
                const expected = [
                    {type: actions.updateSettingsRequest.toString()},
                    {type: actions.updateSettingsFailure.toString()},
                    {type: actions.signOut.toString()}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPatch('/users/settings.json')
            .reply(200, {
                user: {id: 1, email: 'christy@myshopanalyst.com'}
            });

        return store.dispatch(actions.updateSettings())
            .then(() => {
                const expected = [
                    {type: actions.updateSettingsRequest.toString()},
                    {
                        type: actions.updateSettingsSuccess.toString(),
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

describe('validateToken', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onGet('/auth/reset-password.json?token=123')
            .reply(500);

        return store.dispatch(actions.validateToken(123))
            .catch(() => {
                const expected = [
                    {type: actions.validateTokenRequest.toString()},
                    {type: actions.validateTokenFailure.toString()}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onGet('/auth/reset-password.json?token=123')
            .reply(200);

        return store.dispatch(actions.validateToken(123))
            .then(() => {
                const expected = [
                    {type: actions.validateTokenRequest.toString()},
                    {type: actions.validateTokenSuccess.toString()}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});
