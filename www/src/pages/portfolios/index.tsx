import React from 'react';
import { useQuery } from 'react-query';
import { fetcher, QueryKeys } from '../../queryClient';
import { Portfolios } from '../../constants/types';
import PortfolioItem from '../../components/portfolio/item';

const PortfolioListPage = () => {
  const { data } = useQuery<Portfolios>(QueryKeys.FOLIAGES, () =>
    fetcher({
      method: 'GET',
      path: '/portfolios',
    }),
  );

  if (data?.portfolios.length === 0) return <div>Portfolio가 없습니다.</div>;

  return (
    <div>
      <h1>포트폴리오 목록</h1>
      <ul className="portfolios">
        {data?.portfolios.map((pf) => (
          <PortfolioItem portfolio={pf} key={pf.id} />
        ))}
      </ul>
    </div>
  );
};

export default PortfolioListPage;
