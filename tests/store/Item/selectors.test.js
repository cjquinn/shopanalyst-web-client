import { getAddItemsData, getIsFetching, getItems, getOptions, getSelected } from '../../../src/store/Item/selectors';

describe('selectors', () => {
    it('getAddItemsData', () => {
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

        let expected = {
            list_items: [
                {item_id: 3},
                {item: {name: 'Eggs'}}
            ]
        };

        expect(getAddItemsData(state)).toEqual(expected);
    });

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
                search: '',
                selected: []
            }
        };

        let expected = [];

        expect(getOptions(state, props)).toEqual(expected);

        // Just search term
        state = {
            entities: {
                items: {3: {id: 3, name: 'Potato Waffles'}},
                lists: {1: {list_items: []}}
            },
            item: {
                ids: [],
                search: 'Eggs',
                selected: []
            }
        };

        expected = [{
            name: 'Eggs',
            is_selected: false,
            is_existing: false
        }];

        expect(getOptions(state, props)).toEqual(expected);

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
                search: 'Potato Waffles',
                selected: []
            }
        };

        expected = [
            {
                id: 4,
                name: 'Eggs',
                is_selected: false,
                is_existing: false
            },
            {
                id: 3,
                name: 'Potato Waffles',
                is_selected: false,
                is_existing: false
            }
        ];

        expect(getOptions(state, props)).toEqual(expected);

        // Search term and existing item
        state = {
            entities: {
                items: {3: {id: 3, name: 'Potato Waffles'}},
                lists: {1: {list_items: []}}
            },
            item: {
                ids: [3],
                search: 'White Flour',
                selected: []
            }
        };

        expected = [
            {
                id: 3,
                name: 'Potato Waffles',
                is_selected: false,
                is_existing: false
            },
            {
                name: 'White Flour',
                is_selected: false,
                is_existing: false
            }
        ];

        expect(getOptions(state, props)).toEqual(expected);

        // Search term already selected
        state = {
            entities: {
                items: {3: {id: 3, name: 'Potato Waffles'}},
                lists: {1: {list_items: []}}
            },
            item: {
                ids: [],
                search: 'Eggs',
                selected: [{name: 'Eggs'}]
            }
        };

        expected = [];

        expect(getOptions(state, props)).toEqual(expected);

        // Search term and item already selected
        state = {
            entities: {
                items: {3: {id: 3, name: 'Potato Waffles'}},
                lists: {1: {list_items: []}}
            },
            item: {
                ids: [3],
                search: 'Eggsss',
                selected: [{name: 'Eggsss'}, 3]
            }
        };

        expected = [];

        expect(getOptions(state, props)).toEqual(expected);

        // Search term is selected item
        state = {
            entities: {
                items: {3: {id: 3, name: 'Potato Waffles'}},
                lists: {1: {list_items: []}}
            },
            item: {
                ids: [3],
                search: 'Potato Waffles',
                selected: [3]
            }
        };

        expected = [];

        expect(getOptions(state, props)).toEqual(expected);

        // Existing on list
        state = {
            entities: {
                items: {3: {id: 3, name: 'Potato Waffles'}},
                lists: {1: {list_items: [{item: 3}]}}
            },
            item: {
                ids: [3],
                search: 'Eggs',
                selected: []
            }
        };

        expected = [
            {
                name: 'Eggs',
                is_selected: false,
                is_existing: false
            },
            {
                id: 3,
                name: 'Potato Waffles',
                is_selected: false,
                is_existing: true
            }
        ];

        expect(getOptions(state, props)).toEqual(expected);
    });

    it('getSelected', () => {
        let state = {
            entities: {
                items: {3: {id: 3, name: 'Potato Waffles'}},
                lists: {1: {list_items: []}}
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
                id: 3,
                name: 'Potato Waffles',
                is_selected: true
            },
            {
                name: 'Eggs',
                is_selected: true
            }
        ];

        expect(getSelected(state)).toEqual(expected);
    });
});
