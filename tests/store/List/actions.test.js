import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Actions
import * as actions from '../../../src/store/List/actions';
import { signOut } from '../../../src/store/User/actions';

const mock = new MockAdapter(axios);
let store;

describe('createList', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPost('/lists.json')
            .reply(403);

        return store.dispatch(actions.createList())
            .then(() => {
                const expected = [
                    {type: actions.createListRequest.toString()},
                    {type: actions.createListFailure.toString()},
                    {type: signOut.toString()}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPost('/lists.json')
            .reply(200, {
                list: {
                    id: 1,
                    name: 'Weekly Shop'
                }
            });

        return store.dispatch(actions.createList())
            .then(() => {
                const expected = [
                    {type: actions.createListRequest.toString()},
                    {
                        type: actions.createListSuccess.toString(),
                        payload: {
                            entities: {
                                lists: {
                                    1: {
                                        id: 1,
                                        name: 'Weekly Shop',
                                        list_items: []
                                    }
                                }
                            },
                            result: 1
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('deleteList', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onDelete('/lists/1.json')
            .reply(403);

        return store.dispatch(actions.deleteList(1))
            .then(() => {
                const expected = [
                    {type: actions.deleteListRequest.toString()},
                    {type: actions.deleteListFailure.toString()},
                    {type: signOut.toString()}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onDelete('/lists/1.json')
            .reply(200, {
                list: {
                    id: 1,
                    name: 'Weekly Shop'
                }
            });

        return store.dispatch(actions.deleteList(1))
            .then(() => {
                const expected = [
                    {type: actions.deleteListRequest.toString()},
                    {
                        type: actions.deleteListSuccess.toString(),
                        payload: {
                            entities: {
                                lists: {
                                    1: {
                                        id: 1,
                                        name: 'Weekly Shop',
                                        list_items: []
                                    }
                                }
                            },
                            result: 1
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('duplicateList', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPost('/lists/1/duplicate.json')
            .reply(403);

        return store.dispatch(actions.duplicateList(1))
            .then(() => {
                const expected = [
                    {type: actions.duplicateListRequest.toString()},
                    {type: actions.duplicateListFailure.toString()},
                    {type: signOut.toString()}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPost('/lists/1/duplicate.json')
            .reply(200, {
                list: {
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
                }
            });

        return store.dispatch(actions.duplicateList(1))
            .then(() => {
                const expected = [
                    {type: actions.duplicateListRequest.toString()},
                    {
                        type: actions.duplicateListSuccess.toString(),
                        payload: {
                            entities: {
                                lists: {
                                    1: {
                                        id: 1,
                                        name: 'Weekly Shop',
                                        list_items: [2]
                                    }
                                },
                                list_items: {
                                    2: {
                                        id: 2,
                                        item_id: 3,
                                        list_id: 1,
                                        quantity: 1,
                                        item: 3
                                    }
                                },
                                items: {3: {id: 3, name: 'Potato Waffles'}}
                            },
                            result: 1
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('fetchList', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onGet('/lists/1.json')
            .reply(403);

        return store.dispatch(actions.fetchList(1))
            .then(() => {
                const expected = [
                    {type: actions.fetchListRequest.toString()},
                    {type: actions.fetchListFailure.toString()},
                    {type: signOut.toString()}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onGet('/lists/1.json')
            .reply(200, {
                list: {
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
                }
            });

        return store.dispatch(actions.fetchList(1))
            .then(() => {
                const expected = [
                    {type: actions.fetchListRequest.toString()},
                    {
                        type: actions.fetchListSuccess.toString(),
                        payload: {
                            entities: {
                                lists: {
                                    1: {
                                        id: 1,
                                        name: 'Weekly Shop',
                                        list_items: [2]
                                    }
                                },
                                list_items: {
                                    2: {
                                        id: 2,
                                        item_id: 3,
                                        list_id: 1,
                                        quantity: 1,
                                        item: 3
                                    }
                                },
                                items: {3: {id: 3, name: 'Potato Waffles'}}
                            },
                            result: 1
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('fetchLists', () => {
    beforeEach(() => store = global.configureStore({list: {page: 1}}));

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onGet('/lists.json?page=1')
            .reply(403);

        return store.dispatch(actions.fetchLists())
            .then(() => {
                const expected = [
                    {type: actions.fetchListsRequest.toString()},
                    {type: actions.fetchListsFailure.toString()},
                    {type: signOut.toString()}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onGet('/lists.json?page=1')
            .reply(200, {
                lists: [{
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
                }],
                total: 1
            });

        return store.dispatch(actions.fetchLists())
            .then(() => {
                const expected = [
                    {type: actions.fetchListsRequest.toString()},
                    {
                        type: actions.fetchListsSuccess.toString(),
                        payload: {
                            entities: {
                                lists: {
                                    1: {
                                        id: 1,
                                        name: 'Weekly Shop',
                                        list_items: [2]
                                    }
                                },
                                list_items: {
                                    2: {
                                        id: 2,
                                        item_id: 3,
                                        list_id: 1,
                                        quantity: 1,
                                        item: 3
                                    }
                                },
                                items: {3: {id: 3, name: 'Potato Waffles'}}
                            },
                            page: 1,
                            result: [1],
                            total: 1
                        }
                    },
                    {
                        type: actions.updatePage.toString(),
                        payload: 1
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('fetchMoreLists', () => {
    beforeEach(() => store = global.configureStore({list: {page: 1}}));

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onGet('/lists.json?page=2')
            .reply(403);

        return store.dispatch(actions.fetchMoreLists())
            .then(() => {
                const expected = [
                    {type: actions.fetchListsRequest.toString()},
                    {type: actions.fetchListsFailure.toString()},
                    {type: signOut.toString()}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onGet('/lists.json?page=2')
            .reply(200, {
                lists: [{
                    id: 2,
                    name: 'Weekly Shop 2',
                    list_items: [{
                        id: 3,
                        item_id: 4,
                        list_id: 2,
                        quantity: 1,
                        item: {
                            id: 4,
                            name: 'Yogurt'
                        }
                    }]
                }],
                total: 2
            });

        return store.dispatch(actions.fetchMoreLists())
            .then(() => {
                const expected = [
                    {type: actions.fetchListsRequest.toString()},
                    {
                        type: actions.fetchListsSuccess.toString(),
                        payload: {
                            entities: {
                                lists: {
                                    2: {
                                        id: 2,
                                        name: 'Weekly Shop 2',
                                        list_items: [3]
                                    }
                                },
                                list_items: {
                                    3: {
                                        id: 3,
                                        item_id: 4,
                                        list_id: 2,
                                        quantity: 1,
                                        item: 4
                                    }
                                },
                                items: {4: {id: 4, name: 'Yogurt'}}
                            },
                            page: 2,
                            result: [2],
                            total: 2
                        }
                    },
                    {
                        type: actions.updatePage.toString(),
                        payload: 2
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('updateList', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPatch('/lists/1.json')
            .reply(403);

        return store.dispatch(actions.updateList(1))
            .then(() => {
                const expected = [
                    {type: actions.updateListRequest.toString()},
                    {type: actions.updateListFailure.toString()},
                    {type: signOut.toString()}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPatch('/lists/1.json')
            .reply(200, {
                list: {
                    id: 1,
                    name: 'Weekly Shop'
                }
            });

        return store.dispatch(actions.updateList(1))
            .then(() => {
                const expected = [
                    {type: actions.updateListRequest.toString()},
                    {
                        type: actions.updateListSuccess.toString(),
                        payload: {
                            entities: {
                                lists: {
                                    1: {
                                        id: 1,
                                        name: 'Weekly Shop',
                                        list_items: []
                                    }
                                }
                            },
                            result: 1
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});
