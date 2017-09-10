import { instance } from '../api';

export const signUp = data => instance().post('/users.json', data);
