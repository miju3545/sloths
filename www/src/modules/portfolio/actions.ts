import { createAction, createAsyncAction } from 'typesafe-actions';
import { Portfolio } from '../../constants/types';
import { AxiosError } from 'axios';

// 여러 포트폴리오 조회
export const GET_PORTFOLIOS = 'portfolio/GET_PORTFOLIOS';
export const GET_PORTFOLIOS_SUCCESS = 'portfolio/GET_PORTFOLIOS_SUCCESS';
export const GET_PORTFOLIOS_ERROR = 'portfolio/GET_PORTFOLIOS_ERROR';

// 포트폴리오 하나 조회
export const GET_PORTFOLIO = 'portfolio/GET_PORTFOLIO';
export const GET_PORTFOLIO_SUCCESS = 'portfolio/GET_PORTFOLIO_SUCCESS';
export const GET_PORTFOLIO_ERROR = 'portfolio/GET_PORTFOLIO_ERROR';

// 포트폴리오 생성
export const POST_PORTFOLIO = 'portfolio/POST_PORTFOLIO';
export const POST_PORTFOLIO_SUCCESS = 'portfolio/POST_PORTFOLIO_SUCCESS';
export const POST_PORTFOLIO_ERROR = 'portfolio/POST_PORTFOLIO_ERROR';

// 포트폴리오 수정
export const PATCH_PORTFOLIO = 'portfolio/PATCH_PORTFOLIO';
export const PATCH_PORTFOLIO_SUCCESS = 'portfolio/PATCH_PORTFOLIO_SUCCESS';
export const PATCH_PORTFOLIO_ERROR = 'portfolio/PATCH_PORTFOLIO_ERROR';

// 포트폴리오 변경
export const PUT_PORTFOLIO = 'portfolio/PUT_PORTFOLIO';
export const PUT_PORTFOLIO_SUCCESS = 'portfolio/PUT_PORTFOLIO_SUCCESS';
export const PUT_PORTFOLIO_ERROR = 'portfolio/PUT_PORTFOLIO_ERROR';

// 포트폴리오 삭제
export const DELETE_PORTFOLIO = 'portfolio/DELETE_PORTFOLIO';
export const DELETE_PORTFOLIO_SUCCESS = 'portfolio/DELETE_PORTFOLIO_SUCCESS';
export const DELETE_PORTFOLIO_ERROR = 'portfolio/DELETE_PORTFOLIO_ERROR';

// 포트폴리오에 박수 보내기
export const POST_CLAP = 'portfolio/POST_CLAP';
export const POST_CLAP_SUCCESS = 'portfolio/POST_CLAP_SUCCESS';
export const POST_CLAP_ERROR = 'portfolio/POST_CLAP_ERROR';

// 포트폴리오에 박수 내리기
export const DELETE_CLAP = 'portfolio/DELETE_CLAP';
export const DELETE_CLAP_SUCCESS = 'portfolio/DELETE_CLAP_SUCCESS';
export const DELETE_CLAP_ERROR = 'portfolio/DELETE_CLAP_ERROR';

export const postClapAsync = createAsyncAction(
  POST_CLAP,
  POST_CLAP_SUCCESS,
  POST_CLAP_ERROR,
)<undefined, Portfolio, AxiosError>();

export const deleteClapAsync = createAsyncAction(
  DELETE_CLAP,
  DELETE_CLAP_SUCCESS,
  DELETE_CLAP_ERROR,
)<undefined, number, AxiosError>();
