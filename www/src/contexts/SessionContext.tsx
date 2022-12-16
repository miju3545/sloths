import React, { createContext, Dispatch, ReactNode, useReducer } from 'react';

type User = {
  id: number;
  email: string;
  nickname: string;
  tel: string;
};

type State = {
  loginUser: User | null;
};

type Action = { type: 'LOGIN'; payload: User } | { type: 'LOGOUT' };
type SessionDispatch = Dispatch<Action>;

const SessionStateContext = createContext<State | null>(null);
const SessionActionContext = createContext<SessionDispatch | null>(null);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loginUser: action.payload,
      };
    default:
      throw new Error('Unhandled action');
  }
};

const initialState = {
  loginUser: null,
};

const SessionContext = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SessionStateContext.Provider value={state}>
      <SessionActionContext.Provider value={dispatch}>
        {children}
      </SessionActionContext.Provider>
    </SessionStateContext.Provider>
  );
};

export default SessionContext;
