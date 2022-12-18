import { Portfolio } from '../../constants/types';
import { TYPES, PortfoliosState, Portfol } from './types';

export const getPortfolios = (id: number) => ({
  type: TYPES.GET_PORTFOLIOS,
  payload: id,
});

export const getPortfolio = (id: number) => ({
  type: TYPES.GET_PORTFOLIO,
  payload: id,
});

export const postPortfolio = (data: Portfol) => ({
  type: TYPES.POST_PORTFOLIO,
  payload: data,
});
