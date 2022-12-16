import React from 'react';
import { Link } from 'react-router-dom';
import { Foliage } from '../../constants/types';

type FoliageItemProps = {
  data: Foliage;
};

const PortfolioDetail = ({ data }: FoliageItemProps) => {
  return (
    <div className="foliage-detail">
      <p className="foliage-detail__category">{data.category}</p>
      <p className="foliage-detail__title">{data.title}</p>
      <img src={data.image} alt={data.image} />
    </div>
  );
};

export default PortfolioDetail;
