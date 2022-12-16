import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { PortfolioAction } from './types';
import api from '../../api/portfolio';
import { postClapAsync, deleteClapAsync } from './actions';
import { Portfolio } from '../../constants/types';
import { AnyAction } from 'redux';

export function postClapThunk(
  portfolio: Portfolio,
): ThunkAction<void, RootState, null, PortfolioAction> {
  return async (dispatch) => {
    const { request, success, failure } = postClapAsync;
    dispatch(request());

    try {
      const result = await api.postClap(portfolio);
      dispatch(success(result));
    } catch (e: any) {
      dispatch(failure(e));
    }
  };
}

export function deleteClapThunk(
  id: number,
): ThunkAction<void, RootState, null, PortfolioAction> {
  return async (dispatch) => {
    const { request, success, failure } = deleteClapAsync;
    dispatch(request());

    try {
      const tid = await api.deleteClap(id);
      dispatch(success(tid));
    } catch (e: any) {
      dispatch(failure(e));
    }
  };
}
