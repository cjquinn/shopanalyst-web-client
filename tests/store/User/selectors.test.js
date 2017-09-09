import { getIsAuthorised } from '../../../src/store/User/selectors';

describe('selectors', () => {
    it('getIsAuthorised', () => {
        let state = {user: {}};

        expect(getIsAuthorised(state)).toBe(false);

        state = {user: {id: 1}};

        expect(getIsAuthorised(state)).toBe(true);
    });
});
