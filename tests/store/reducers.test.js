import reducers from '../../src/store/reducers';

describe('initial state', () => {
    it('shape', () => {
        const state = reducers(undefined, {});

        const expected = ['form', 'user'];

        expect(Object.keys(state)).toEqual(expected);
    });
});
