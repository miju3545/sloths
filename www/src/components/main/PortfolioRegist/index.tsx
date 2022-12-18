import React from 'react';

type PortfolioCreateProps = {
  onCreate: () => void;
};
const PortfolioCreate = ({ onCreate }: PortfolioCreateProps) => {
  return (
    <form onSubmit={onCreate}>
      <input />
      <button type="submit">만들기</button>
    </form>
  );
};

export default PortfolioCreate;
