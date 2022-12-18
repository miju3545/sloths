import { PortfolioAction, PortfoliosState } from './types';
import { TYPES } from './types';
import { Portfolio } from '../../constants/types';

const initialState: PortfoliosState = {
  loading: false,
  error: null,
  data: [
    {
      id: 1,
      title: 'general',
      summary: 'default portfolio.',
      thumbnailUrl: 'public/placeholder.png',
      category: 'development',
    },
  ],
};

const portfolio = (
  state: PortfoliosState = initialState,
  action: PortfolioAction,
) => {
  const nextId = state.data?.length || 1;

  switch (action.type) {
    case TYPES.POST_PORTFOLIO:
      return {
        loading: false,
        error: null,
        data: state.data?.concat({ ...action.payload, id: nextId + 1 }) || [],
      };
    case TYPES.GET_PORTFOLIO:
      return {
        loading: false,
        error: null,
        data:
          state.data?.find((portfol) => portfol.id === action.payload) || null,
      };
    default:
      return state;
  }
};

export default portfolio;
