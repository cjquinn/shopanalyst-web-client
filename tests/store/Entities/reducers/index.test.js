import reducers from '../../../../src/store/Entities/reducers';

describe('initial state', () => {
    it('shape', () => {
        const expected = {
            items: {},
            list_items: {},
            lists: {}
        };

        expect(reducers(undefined, {})).toEqual(expected);
    }); 
});
