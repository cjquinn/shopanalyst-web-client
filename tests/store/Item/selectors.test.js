import { getIsFetching, getItems, getOptions, getSelected } from '../../../src/store/Item/selectors';

describe('selectors', () => {
    it('getIsFetching', () => {
        const state = {item: {isFetching: true}};

        expect(getIsFetching(state)).toEqual(true);
    });

    it('getItems', () => {
        const state = {
            entities: {
                items: {
                    3: {id: 3, name: 'Potato Waffles'},
                    4: {id: 4, name: 'Eggs'}
                }
            },
            item: {
                ids: [3, 4],
                selected: [4]
            }
        };

        const expected = [{
            id: 3,
            name: 'Potato Waffles'
        }];

        expect(getItems(state)).toEqual(expected);
    });

    it('getOptions', () => {
        let state = {
            entities: {
                items: {3: {id: 3, name: 'Potato Waffles'}}
            },
            item: {
                ids: [3],
                search: '',
                selected: []
            }
        };

        let expected = [];

        expect(getOptions(state)).toEqual(expected);

        state = {
            entities: {
                items: {3: {id: 3, name: 'Potato Waffles'}}
            },
            item: {
                ids: [],
                search: 'Eggs',
                selected: []
            }
        };

        expected = [{
            is_complete: false,
            item: {name: 'Eggs'}
        }];

        expect(getOptions(state)).toEqual(expected);

        state = {
            entities: {
                items: {3: {id: 3, name: 'Potato Waffles'}}
            },
            item: {
                ids: [3],
                search: 'Potato Waffles',
                selected: []
            }
        };

        expected = [{
            is_complete: false,
            item: {
                id: 3,
                name: 'Potato Waffles'
            }
        }];

        expect(getOptions(state)).toEqual(expected);

        state = {
            entities: {
                items: {3: {id: 3, name: 'Potato Waffles'}}
            },
            item: {
                ids: [3],
                search: 'Eggs',
                selected: []
            }
        };

        expected = [
            {
                is_complete: false,
                item: {name: 'Eggs'}
            },
            {
                is_complete: false,
                item: {
                    id: 3,
                    name: 'Potato Waffles'
                }
            }
        ];

        expect(getOptions(state)).toEqual(expected);
    });

    it('getSelected', () => {
        let state = {
            entities: {
                items: {3: {id: 3, name: 'Potato Waffles'}}
            },
            item: {
                ids: [3],
                search: '',
                selected: [
                    3,
                    {name: 'Eggs'}
                ]
            }
        };

        let expected = [
            {
                is_complete: true,
                item: {
                    id: 3,
                    name: 'Potato Waffles'
                }
            },
            {
                is_complete: true,
                item: {name: 'Eggs'}
            }
        ];

        expect(getSelected(state)).toEqual(expected);
    });    
});
