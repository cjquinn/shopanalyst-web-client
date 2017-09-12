import { instance } from '../api';

export const signIn = data => instance().post('/login.json', data);

export const signUp = data => instance().post('/users.json', data);
