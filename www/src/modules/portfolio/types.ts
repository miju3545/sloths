import { Portfolio } from '../../constants/types';
import { getPortfolio, getPortfolios, postPortfolio } from './actions';
export const TYPES = {
  // 포트폴리오 여러개 조회
  GET_PORTFOLIOS: 'portfolio/GET_PORTFOLIOS' as const,
  GET_PORTFOLIOS_SUCCESS: 'portfolio/GET_PORTFOLIOS_SUCCESS' as const,
  GET_PORTFOLIOS_ERROR: 'portfolio/GET_PORTFOLIOS_ERROR' as const,

  // 포트폴리오 하나 조회
  GET_PORTFOLIO: 'portfolio/GET_PORTFOLIO' as const,
  GET_PORTFOLIO_SUCCESS: 'portfolio/GET_PORTFOLIO_SUCCESS' as const,
  GET_PORTFOLIO_ERROR: 'portfolio/GET_PORTFOLIO_ERROR' as const,

  // 포트폴리오 생성
  POST_PORTFOLIO: 'portfolio/POST_PORTFOLIO' as const,
  POST_PORTFOLIO_SUCCESS: 'portfolio/POST_PORTFOLIO_SUCCESS' as const,
  POST_PORTFOLIO_ERROR: 'portfolio/POST_PORTFOLIO_ERROR' as const,

  // 포트폴리오 수정
  PATCH_PORTFOLIO: 'portfolio/PATCH_PORTFOLIO' as const,
  PATCH_PORTFOLIO_SUCCESS: 'portfolio/PATCH_PORTFOLIO_SUCCESS' as const,
  PATCH_PORTFOLIO_ERROR: 'portfolio/PATCH_PORTFOLIO_ERROR' as const,

  // 포트폴리오 변경
  PUT_PORTFOLIO: 'portfolio/PUT_PORTFOLIO' as const,
  PUT_PORTFOLIO_SUCCESS: 'portfolio/PUT_PORTFOLIO_SUCCESS' as const,
  PUT_PORTFOLIO_ERROR: 'portfolio/PUT_PORTFOLIO_ERROR' as const,

  // 포트폴리오 삭제
  DELETE_PORTFOLIO: 'portfolio/DELETE_PORTFOLIO' as const,
  DELETE_PORTFOLIO_SUCCESS: 'portfolio/DELETE_PORTFOLIO_SUCCESS' as const,
  DELETE_PORTFOLIO_ERROR: 'portfolio/DELETE_PORTFOLIO_ERROR' as const,

  // 포트폴리오에 박수 보내기
  POST_CLAP: 'portfolio/POST_CLAP' as const,
  POST_CLAP_SUCCESS: 'portfolio/POST_CLAP_SUCCESS' as const,
  POST_CLAP_ERROR: 'portfolio/POST_CLAP_ERROR' as const,

  // 포트폴리오에 박수 내리기
  DELETE_CLAP: 'portfolio/DELETE_CLAP' as const,
  DELETE_CLAP_SUCCESS: 'portfolio/DELETE_CLAP_SUCCESS' as const,
  DELETE_CLAP_ERROR: 'portfolio/DELETE_CLAP_ERROR' as const,
};

export type Portfol = {
  id: number;
  category: string;
  title: string;
  summary?: string;
  thumbnailUrl?: string;
};

export type PortfoliosState = {
  loading: boolean;
  error: Error | null;
  data: Portfol[] | null;
};

export type PortfolioAction =
  | ReturnType<typeof getPortfolios>
  | ReturnType<typeof getPortfolio>
  | ReturnType<typeof postPortfolio>;
