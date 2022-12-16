import React from 'react';
import { Link } from 'react-router-dom';

const Gnb = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/projects">프로젝트</Link>
        </li>
        <li>
          <Link to="/blogs">블로그</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Gnb;
