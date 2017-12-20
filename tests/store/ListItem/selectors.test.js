import { getListItems, getListItemsByCompleted } from '../../../src/store/ListItem/selectors';

describe('selectors', () => {
    it('getListItems', () => {
        const state = {
            entities: {
                lists: {
                    1: {
                        id: 1,
                        name: 'Weekly Shop',
                        list_items: [1]
                    }
                },
                list_items: {
                    1: {
                        id: 1,
                        item_id: 1,
                        list_id: 1,
                        quantity: 1,
                        item: 1,
                        completed: '2017-12-01T00:00:12+00:00',
                        modified: '2017-12-01T00:00:12+00:00'
                    }
                },
                items: {
                    1: {
                        id: 1,
                        name: 'Potato Waffles'
                    }
                }
            }
        };

        const props = {
            match: {
                params: {
                    id: 1
                }
            }
        };

        const expected = [
            {
                id: 1,
                item_id: 1,
                list_id: 1,
                quantity: 1,
                item: {
                    id: 1,
                    name: 'Potato Waffles'
                },
                completed: '2017-12-01T00:00:12+00:00',
                modified: '2017-12-01T00:00:12+00:00'
            }
        ];

        expect(getListItems(state, props)).toEqual(expected);
    });

    it('getListItemsByCompleted', () => {
        const props = {
            match: {
                params: {
                    id: 1
                }
            }
        };

        const state = {
            entities: {
                lists: {
                    1: {
                        id: 1,
                        name: 'Weekly Shop',
                        list_items: [1, 2, 3, 4]
                    }
                },
                list_items: {
                    1: {
                        id: 1,
                        item_id: 1,
                        list_id: 1,
                        quantity: 1,
                        item: 1,
                        completed: '2017-12-01T00:00:12+00:00',
                        modified: '2017-12-01T00:00:12+00:00'
                    },
                    2: {
                        id: 2,
                        item_id: 1,
                        list_id: 1,
                        quantity: 1,
                        item: 1,
                        completed: null,
                        modified: '2017-12-02T00:00:12+00:00'
                    },
                    3: {
                        id: 3,
                        item_id: 1,
                        list_id: 1,
                        quantity: 1,
                        item: 1,
                        completed: '2017-12-03T00:00:12+00:00',
                        modified: '2017-12-03T00:00:12+00:00'
                    },
                    4: {
                        id: 4,
                        item_id: 1,
                        list_id: 1,
                        quantity: 1,
                        item: 1,
                        completed: null,
                        modified: '2017-12-04T00:00:12+00:00'
                    }
                },
                items: {
                    1: {
                        id: 1,
                        name: 'Potato Waffles'
                    }
                }
            }
        };

        const expected = {
            complete: [
                {
                    id: 3,
                    item_id: 1,
                    list_id: 1,
                    quantity: 1,
                    item: {
                        id: 1,
                        name: 'Potato Waffles'
                    },
                    completed: '2017-12-03T00:00:12+00:00',
                    modified: '2017-12-03T00:00:12+00:00'
                },
                {
                    id: 1,
                    item_id: 1,
                    list_id: 1,
                    quantity: 1,
                    item: {
                        id: 1,
                        name: 'Potato Waffles'
                    },
                    completed: '2017-12-01T00:00:12+00:00',
                    modified: '2017-12-01T00:00:12+00:00'
                }
            ],
            incomplete: [
                {
                    id: 4,
                    item_id: 1,
                    list_id: 1,
                    quantity: 1,
                    item: {
                        id: 1,
                        name: 'Potato Waffles'
                    },
                    completed: null,
                    modified: '2017-12-04T00:00:12+00:00'
                },
                {
                    id: 2,
                    item_id: 1,
                    list_id: 1,
                    quantity: 1,
                    item: {
                        id: 1,
                        name: 'Potato Waffles'
                    },
                    completed: null,
                    modified: '2017-12-02T00:00:12+00:00'
                }
            ]
        };

        expect(getListItemsByCompleted(state, props)).toEqual(expected);
    });
});
