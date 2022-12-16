import { AnyOBJ } from '../../constants/types';

const initialState: AnyOBJ = {
  loginUser: null,
  foliages: [],
};

function auth(state = initialState, action: { type: string; data: any }) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...initialState,
        loginUser: action.data,
      };

    case 'LOGOUT':
      return {
        ...initialState,
        loginUser: null,
      };
  }
}

export default auth;
