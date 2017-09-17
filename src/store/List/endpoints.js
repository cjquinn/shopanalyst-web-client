import { instance } from '../api';

export const createList = data => instance().post('/lists.json', data);

export const fetchLists = page => instance().get(`/lists.json?page=${page}`);
