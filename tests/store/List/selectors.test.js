import { getLists, getPage, getTotal } from '../../../src/store/List/selectors';

describe('selectors', () => {
    it('getLists', () => {
        let state = {
            entities: {
                lists: {
                    1: {
                        id: 1,
                        name: 'Weekly Shop',
                        list_items: [{
                            id: 2,
                            item_id: 3,
                            list_id: 1,
                            quantity: 1,
                            item: 3
                        }]
                    }
                },
                items: {3: {id: 3, name: 'Potato Waffles'}}
            },
            list: {
                ids: [1]
            }
        };

        const expected = [{
            id: 1,
            name: 'Weekly Shop',
            list_items: [{
                id: 2,
                item_id: 3,
                list_id: 1,
                quantity: 1,
                item: {
                    id: 3,
                    name: 'Potato Waffles'
                }
            }]
        }];

        expect(getLists(state)).toEqual(expected);
    });

    it('getPage', () => {
        let state = {list: {page: 1}};

        expect(getPage(state)).toEqual(1);
    });

    it('getTotal', () => {
        let state = {list: {total: 1}};

        expect(getTotal(state)).toEqual(1);
    });
});
