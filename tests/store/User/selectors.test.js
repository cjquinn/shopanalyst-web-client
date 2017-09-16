import { getIsAuthorised, getIsFetching } from '../../../src/store/User/selectors';

describe('selectors', () => {
    it('getIsAuthorised', () => {
        let state = {user: {}};

        expect(getIsAuthorised(state)).toBe(false);

        state = {user: {id: 1}};

        expect(getIsAuthorised(state)).toBe(true);
    });

    it('getIsFetching', () => {
        let state = {user: {isFetching: false}};

        expect(getIsFetching(state)).toBe(false);
    });
});
