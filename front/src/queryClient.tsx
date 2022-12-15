import { QueryClient } from 'react-query';

export type AnyOBJ = { [key: string]: any };

export const getClient = (() => {
  let client: QueryClient | null = null;

  return () => {
    if (!client) client = new QueryClient();
    return client;
  };
})();

export const QueryKeys: { [key: string]: string } = {
  FOLIAGES: 'FOLIAGES',
  SLOTHS: 'SLOTHS',
};

const BASE_URL = 'https://fakestoreapi.com';

export const fetcher = ({
  method,
  path,
  body,
  params,
}: {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  body?: AnyOBJ;
  params?: AnyOBJ;
}): Promise<any[]> => {
  const url = `${BASE_URL}${path}`;
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': BASE_URL,
    },
  };
  return fetch(url, options)
    .then((res) => res.json())
    .then((json) => json)
    .catch((error) => console.error(error));
};
