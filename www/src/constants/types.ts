export type AnyOBJ = { [key: string]: any };

export type Rating = {
  rate: number;
  count: number;
};

export type Foliage = {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  price: string;
  rating: Rating;
};
