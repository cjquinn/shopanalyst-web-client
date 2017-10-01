import { createSelector } from 'reselect';

export const getAddItemsData = createSelector(
    state => state.item.selected,
    selected => ({
        list_items: selected.map(item => item.name
            ? {item}
            : {item_id: item}
        )
    })
);

export const getIsFetching = createSelector(
    state => state.item.isFetching,
    isFetching => isFetching
);

export const getItems = createSelector(
    state => state.item.ids,
    state => state.item.selected,
    state => state.entities.items,
    (ids, selected, items) => ids
        .filter(id => selected.indexOf(id) === -1)
        .map(id => items[id])
);


const listItem = (item, is_complete) => ({
    is_complete,
    item
});

export const getOptions = createSelector(
    state => state.item.search,
    state => state.item.selected,
    getItems,
    (search, selected, items) => {
        if (search.length === 0) {
            return [];
        }

        let newListItem;

        if (!selected.some(item => item.name === search)) {
            newListItem = listItem({name: search});
        }

        if (items.length === 0) {
            if (newListItem) {
                return [listItem({name: search}, false)];
            }

            return [];
        }

        if (items[0].name === search ||
            !newListItem
        ) {
            return items.map(item => listItem(item, false));
        }

        return [
            listItem({name: search}, false),
            ...items.map(item => listItem(item, false))
        ];
    }
);

export const getSelected = createSelector(
    state => state.item.selected,
    state => state.entities.items,
    (selected, items) => selected.map(item => listItem(item.name ? item : items[item], true))
);
