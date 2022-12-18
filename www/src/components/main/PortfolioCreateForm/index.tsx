import React, { useState } from 'react';

type PortfolioCreateFormProps = {
  onCreate: (data: any) => void;
};

const PortfolioCreateForm = ({ onCreate }: PortfolioCreateFormProps) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [summary, setSummary] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');

  const onSubmit = (e: any) => {
    e.preventDefault();
    onCreate({ title, category, setCategory, thumbnailUrl });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="title"
        type="text"
        value={title}
        onChange={(e: any) => setTitle(e.target.value)}
      />
      <input
        placeholder="category"
        type="text"
        value={category}
        onChange={(e: any) => setCategory(e.target.value)}
      />
      <input
        placeholder="summary"
        type="text"
        value={summary}
        onChange={(e: any) => setSummary(e.target.value)}
      />
      <input
        placeholder="thumbnailUrl"
        type="text"
        value={thumbnailUrl}
        onChange={(e: any) => setThumbnailUrl(e.target.value)}
      />
      <button type="submit">만들기</button>
    </form>
  );
};

export default PortfolioCreateForm;
