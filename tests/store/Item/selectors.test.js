import { getIsFetching, getItemOptions } from '../../../src/store/Item/selectors';

describe('selectors', () => {
    it('getIsFetching', () => {
        const state = {item: {isFetching: true}};

        expect(getIsFetching(state)).toEqual(true);
    });

    it('getItemOptions', () => {
        const props = {
            match: {
                params: {
                    id: 1
                }
            }
        };

        // Just existing item
        let state = {
            entities: {
                items: {3: {id: 3, name: 'Potato Waffles'}},
                lists: {1: {list_items: []}}
            },
            item: {
                ids: [3],
                search: ''
            }
        };

        let expected = [];

        expect(getItemOptions(state, props)).toEqual(expected);

        // Just search term
        state = {
            entities: {
                items: {3: {id: 3, name: 'Potato Waffles'}},
                lists: {1: {list_items: []}}
            },
            item: {
                ids: [],
                search: 'Eggs'
            }
        };

        expected = [{
            name: 'Eggs',
            is_existing: false
        }];

        expect(getItemOptions(state, props)).toEqual(expected);

        // Search term same as item
        state = {
            entities: {
                items: {
                    3: {id: 3, name: 'Potato Waffles'},
                    4: {id: 4, name: 'Eggs'}
                },
                lists: {1: {list_items: []}}
            },
            item: {
                ids: [4, 3],
                search: 'Potato Waffles'
            }
        };

        expected = [
            {
                id: 4,
                name: 'Eggs',
                is_existing: false
            },
            {
                id: 3,
                name: 'Potato Waffles',
                is_existing: false
            }
        ];

        expect(getItemOptions(state, props)).toEqual(expected);

        // Search term and existing item
        state = {
            entities: {
                items: {3: {id: 3, name: 'Potato Waffles'}},
                lists: {1: {list_items: []}}
            },
            item: {
                ids: [3],
                search: 'White Flour'
            }
        };

        expected = [
            {
                id: 3,
                name: 'Potato Waffles',
                is_existing: false
            },
            {
                name: 'White Flour',
                is_existing: false
            }
        ];

        expect(getItemOptions(state, props)).toEqual(expected);

        // Existing on list
        state = {
            entities: {
                items: {3: {id: 3, name: 'Potato Waffles'}},
                lists: {1: {list_items: [{item: 3}]}}
            },
            item: {
                ids: [3],
                search: 'Eggs'
            }
        };

        expected = [
            {
                name: 'Eggs',
                is_existing: false
            },
            {
                id: 3,
                name: 'Potato Waffles',
                is_existing: true
            }
        ];

        expect(getItemOptions(state, props)).toEqual(expected);
    });
});
