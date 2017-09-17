import reducers from '../../../src/store/Entities/reducers';

describe('initial state', () => {
    it('shape', () => {
        const expected = {
            items: {},
            lists: {}
        };

        expect(reducers(undefined, {})).toEqual(expected);
    }); 
});

describe('cache', () => {
    it('ANY_TYPE', () => {
        const state = {
            items: {},
            lists: {}
        };

        const action = {
            type: 'ANY_TYPE',
            payload: {
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
                result: [1]
            }
        };

        const expected = {
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
        };

        expect(reducers(state, action)).toEqual(expected);
    });
});
