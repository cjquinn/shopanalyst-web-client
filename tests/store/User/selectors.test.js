import { getEmail, getIsAuthorised, getIsFetching } from '../../../src/store/User/selectors';

describe('selectors', () => {
    it('getIsAuthorised', () => {
        let state = {user: {}};

        expect(getIsAuthorised(state)).toBe(false);

        state = {user: {id: 1}};

        expect(getIsAuthorised(state)).toBe(true);
    });

    it('getEmail', () => {
        const state = {user: {email: 'christy@myshopanalyst.com'}};

        const expected = 'christy@myshopanalyst.com';

        expect(getEmail(state)).toEqual(expected);
    });

    it('getIsFetching', () => {
        const state = {user: {isFetching: false}};

        expect(getIsFetching(state)).toBe(false);
    });
});
