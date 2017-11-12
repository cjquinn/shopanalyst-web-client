import { omit } from 'lodash';

export const withComputed = list => {
    let completeCount = 0;
    let itemsProgress = '0/0 items';
    let progress = 0;

    if (list.list_items &&
        list.list_items.length > 0
    ) {
        completeCount = list.list_items
            .filter(listItem => listItem.is_complete)
            .length;
        itemsProgress = `${completeCount}/${list.list_items.length} item${completeCount !== 1 ? 's' : ''}`;
        progress = (completeCount / list.list_items.length) * 100;
    }

    return {
        ...omit(list, 'list_items'),
        itemsProgress,
        progress
    };
};
