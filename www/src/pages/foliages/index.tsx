import React from 'react';
import { useQuery } from 'react-query';
import { fetcher, QueryKeys } from '../../queryClient';
import { Foliage } from '../../constants/types';
import FoliageItem from '../../components/foliage/item';

const FoliageList = () => {
  const { data } = useQuery<Foliage[]>(QueryKeys.FOLIAGES, () =>
    fetcher({
      method: 'GET',
      path: '/products',
    }),
  );

  return (
    <div>
      <h1>포트폴리오 목록</h1>
      <ul className="foliages">
        {data?.map((foliage) => (
          <FoliageItem
            data={foliage}
            // onToggleLike={onToggleLike}
            key={foliage.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default FoliageList;
