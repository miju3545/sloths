// action type
export const TYPES = {
  LOGIN: 'session/LOGIN' as const,
  LOGIN_SUCCESS: 'session/LOGIN_SUCCESS' as const,
  LOGIN_ERROR: 'session/LOGIN_ERROR' as const,
  LOGOUT: 'session/LOGOUT' as const,
  LOGOUT_SUCCESS: 'session/LOGOUT_SUCCESS' as const,
  LOGOUT_ERROR: 'session/LOGOUT_ERROR' as const,
  CHANGE_NICKNAME: 'session/CHANGE_NICKNAME' as const,
  AUTH_EMAIL: 'session/AUTH_EMAIL' as const,
  AUTH_GITHUB_URL: 'session/AUTH_GITHUB_URL' as const,
  AUTH_BLOG_URL: 'session/AUTH_BLOG_URL' as const,
};

export type User = {
  id: number;
  email: string;
  tel: string;
  nickname: string;
};

export type SessionState = {
  loading: boolean;
  error: Error | null;
  data: User | null;
};

export type SessionActions = ReturnType<typeof onLogin | typeof onLogout>;
export type Info = {
  nickname?: string;
  email?: string;
  tel?: number;
};

// actions
export const onLogin = (info: Info) => ({ type: TYPES.LOGIN, payload: info });
export const onLogout = () => ({ type: TYPES.LOGOUT });

const initialState: SessionState = {
  loading: false,
  error: null,
  data: null,
};

const session = (
  state: SessionState = initialState,
  action: SessionActions,
) => {
  switch (action.type) {
    case TYPES.LOGIN:
      return {
        ...state,
        loading: false,
        error: false,
        data: { ...action.payload },
      };
    case TYPES.LOGOUT:
      return {
        ...state,
        loading: false,
        error: false,
        data: null,
      };
    default:
      return state;
  }
};

export default session;
