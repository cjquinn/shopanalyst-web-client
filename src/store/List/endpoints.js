import { instance } from '../api';

export const fetchLists = page => instance().get(`/lists.json?page=${page}`);
