import React from 'react';
import { useQuery } from 'react-query';
import { fetcher, QueryKeys } from '../../queryClient';
import { Foliage } from '../../constants/types';
import PortfolioItem from '../../components/portfolio/item';

const PortfolioListPage = () => {
  const { data } = useQuery<Foliage[]>(QueryKeys.FOLIAGES, () =>
    fetcher({
      method: 'GET',
      path: '/products',
    }),
  );

  if (data?.length === 0) return <div>준비된 내역이 없습니다.</div>;

  return (
    <div>
      <h1>포트폴리오 목록</h1>
      <ul className="foliages">
        {data?.map((foliage) => (
          <PortfolioItem data={foliage} key={foliage.id} />
        ))}
      </ul>
    </div>
  );
};

export default PortfolioListPage;
