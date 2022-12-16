import React from 'react';
import { Link } from 'react-router-dom';
import { Foliage } from '../../constants/types';

type FoliageItemProps = {
  data: Foliage;
};

const PortfolioItem = ({ data }: FoliageItemProps) => {
  return (
    <li className="foliage-item">
      <Link to={`/portfolios/${data.id}`}>
        <p className="foliage-item__category">{data.category}</p>
        <p className="foliage-item__title">{data.title}</p>
      </Link>
    </li>
  );
};

export default PortfolioItem;
