import React from 'react';
import { AnyOBJ, Foliage } from '../../constants/types';

type FoliageItemProps = {
  data: Foliage;
  onToggleLike?: (id: number) => void;
};

const FoliageItem = ({ data, onToggleLike }: FoliageItemProps) => {
  return (
    <li className="foliage-item">
      <p className="foliage-item__category">{data.category}</p>
      <p className="foliage-item__title">{data.title}</p>
    </li>
  );
};

export default FoliageItem;
