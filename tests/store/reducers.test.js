import reducers from '../../src/store/reducers';

describe('initial state', () => {
    it('shape', () => {
        const state = reducers(undefined, {});

        expect(state.user).toBeDefined();
    });
});
