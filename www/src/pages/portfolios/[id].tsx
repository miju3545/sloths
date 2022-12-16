import React from 'react';
import { useQuery } from 'react-query';
import { fetcher, QueryKeys } from '../../queryClient';
import { Foliage } from '../../constants/types';
import { useParams } from 'react-router-dom';
import PortfolioDetail from '../../components/portfolio/detail';
import Gnb from '../../components/gnb';

const PortfolioDetailPage = () => {
  const { id } = useParams();
  const { data } = useQuery<Foliage>([QueryKeys.FOLIAGES, id], () =>
    fetcher({
      method: 'GET',
      path: `/products/${id}`,
    }),
  );

  if (!data) return null;

  return (
    <div>
      <Gnb />
      <h1>포트폴리오 상세 목록</h1>
      <PortfolioDetail data={data} />
    </div>
  );
};

export default PortfolioDetailPage;
