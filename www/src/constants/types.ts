export type AnyOBJ = { [key: string]: any };

export type Sloth = {
  id: number;
  nickname: string;
  email: string;
  password?: string;
  tel: string;
};

export type Rating = {
  rate: number;
  count: number;
};

export type Category = '개발' | '기획' | '광고' | '기타';

export type Portfolio = {
  id: number;
  category: Category;
  title: string;
  summary: string;
  thumbnailUrl: string;
  meta: {
    visits: number;
    claps: number;
  };
  isClapped: boolean;
  createdAt: string;
  updatedAt: string;
};

export type Portfolios = {
  portfolios: Portfolio[];
};
