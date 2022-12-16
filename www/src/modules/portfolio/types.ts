import * as actions from './actions';
import { Portfolio } from '../../constants/types';
import { ActionType } from 'typesafe-actions';

export type PortfoliosState = {
  loading: boolean;
  error: Error | null;
  data: Portfolio[] | null;
};

export type PortfolioAction = ActionType<typeof actions>;
