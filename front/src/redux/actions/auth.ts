import { AnyOBJ } from '../../constants/types';

export const login = (info: AnyOBJ) => ({ type: 'LOGIN', data: info });
export const logout = () => ({ type: 'LOGOUT' });
