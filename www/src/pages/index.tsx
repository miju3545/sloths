import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Modal from '../components/Modal';
import { fetcher, QueryKeys } from '../queryClient';

const MainPage = () => {
  const { data } = useQuery(QueryKeys.MOCK, () =>
    fetcher({
      method: 'GET',
      path: '/mock',
    }),
  );
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(true);
  const onToggle = () => setIsOpenCreateModal((prev) => !prev);
  return (
    <div>
      <button onClick={onToggle}>포트폴리오 만들기</button>
      <Modal
        isOpen={isOpenCreateModal}
        onClose={onToggle}
        style={{
          outer: { backgroundColor: 'rgba(0,0,0,0.7)' },
        }}
      >
        <div className="modal-content">
          <h2>포트폴리오 만들기</h2>
        </div>
      </Modal>
    </div>
  );
};

export default MainPage;
