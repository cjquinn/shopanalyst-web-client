import { getIsFetching, getItems } from '../../../src/store/Item/selectors';

describe('selectors', () => {
    it('getIsFetching', () => {
        const state = {item: {isFetching: true}};

        expect(getIsFetching(state)).toEqual(true);
    });

    it('getItems', () => {
        const state = {
            entities: {
                items: {3: {id: 3, name: 'Potato Waffles'}}
            },
            item: {
                ids: [3]
            }
        };

        const expected = [{
            id: 3,
            name: 'Potato Waffles'
        }];

        expect(getItems(state)).toEqual(expected);
    });
});
