import axios from 'axios';
import { Portfolio, Portfolios } from '../../constants/types';

const BASE_URL = 'http://localhost:5173';

const getPortfolios = () => {
  return axios.get<Portfolios>(`${BASE_URL}/porfolios`).then((res) => res.data);
};

const postPortfolio = (portfolioInfo: any) => {
  return axios
    .post<Portfolio>(`${BASE_URL}/portfolios`, portfolioInfo)
    .then((res) => res.data);
};

const postClap = (portfolio: Portfolio) => {
  return axios
    .post<Portfolio>(`${BASE_URL}/portfolios/${portfolio.id}/clap`, {
      portfolio,
    })
    .then((res) => res.data);
};

const deleteClap = (id: number) => {
  return axios
    .delete<number>(`${BASE_URL}/portfolios/${id}/clap`)
    .then((res) => res.data);
};

export default { getPortfolios, postPortfolio, postClap, deleteClap };
