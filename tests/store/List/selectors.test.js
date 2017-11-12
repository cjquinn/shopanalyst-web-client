import { getIsFetching, getList, getListItems, getLists, getPage, getTotal } from '../../../src/store/List/selectors';

describe('selectors', () => {
    it('getIsFetching', () => {
        const state = {list: {isFetching: true}};

        expect(getIsFetching(state)).toEqual(true);
    });

    it('getList', () => {
        const state = {
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
            }
        };

        const expected = {
            id: 1,
            name: 'Weekly Shop',
            completeCount: 0,
            itemsProgress: '0/1 items',
            progress: '0%'
        };

        expect(getList(1)(state)).toEqual(expected);
    });

    it('getListItems', () => {
        const state = {
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
            }
        };

        const expected = [{
            id: 2,
            item_id: 3,
            list_id: 1,
            quantity: 1,
            item: {
                id: 3,
                name: 'Potato Waffles'
            }
        }];

        expect(getListItems(1)(state)).toEqual(expected);
    });

    it('getLists', () => {
        const state = {
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
            completeCount: 0,
            itemsProgress: '0/1 items',
            progress: '0%'
        }];

        expect(getLists(state)).toEqual(expected);
    });

    it('getPage', () => {
        const state = {list: {page: 1}};

        expect(getPage(state)).toEqual(1);
    });

    it('getTotal', () => {
        const state = {list: {total: 1}};

        expect(getTotal(state)).toEqual(1);
    });
});
