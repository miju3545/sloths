import { createReducer } from 'typesafe-actions';
import { PortfolioAction, PortfoliosState } from './types';
import {
  POST_CLAP,
  POST_CLAP_SUCCESS,
  POST_CLAP_ERROR,
  DELETE_CLAP,
  DELETE_CLAP_SUCCESS,
  DELETE_CLAP_ERROR,
} from './actions';

const initialState: PortfoliosState = {
  loading: false,
  error: null,
  data: [],
};

const portfolio = createReducer<PortfoliosState, PortfolioAction>(
  initialState,
  {
    [POST_CLAP]: (state) => ({
      ...state,
      loading: true,
      error: null,
      data: null,
    }),
    [POST_CLAP_SUCCESS]: (state, action) => ({
      ...state,
      loading: false,
      error: null,
      data: state.data?.concat({ ...action.payload, clap: true }) || [],
    }),

    [POST_CLAP_ERROR]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
      data: null,
    }),

    [DELETE_CLAP]: (state) => ({
      ...state,
      loading: true,
      error: null,
      data: null,
    }),

    [DELETE_CLAP_SUCCESS]: (state, action) => ({
      ...state,
      loading: false,
      error: null,
      data: state.data?.filter((pfol) => pfol.id !== action.payload) || [],
    }),

    [DELETE_CLAP_ERROR]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
      data: null,
    }),
  },
);

export default portfolio;
