import { createSelector } from 'reselect';

export const getIsFetching = state => state.list.isFetching;

export const makeGetList = () => createSelector(
    (state, props) => state.entities.lists[props.match.params.id],
    state => state.entities.list_items,
    (list, listItems) => {
        if (!list) {
            return null;
        }

        const listsListItems = list.list_items.map(
            listItemId => listItems[listItemId]
        );
        
        let completeCount = 0;
        let itemsProgress = '0/0 items';
        let progress = 0;

        if (listsListItems &&
            listsListItems.length > 0
        ) {
            completeCount = listsListItems
                .filter(listItem => listItem.is_complete)
                .length;
            itemsProgress = `${completeCount}/${listsListItems.length} item${completeCount !== 1 ? 's' : ''}`;
            progress = (completeCount / listsListItems.length) * 100;
        }

        return {
            ...list,
            itemsProgress,
            progress
        };
    }
);

export const getLists = state => state.list.ids.map(id => {
    const getList = makeGetList();
    
    return getList(state, {match: {params: {id}}});
});

export const getPage = state => state.list.page;

export const getTotal = state => state.list.total;
