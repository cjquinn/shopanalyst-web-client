// Api
import { instance } from '../api';

export const fetchItems = search => instance()
    .get(`/items.json?search=${encodeURIComponent(search)}`);
