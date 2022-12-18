import { QueryClient } from 'react-query';
import { AnyOBJ } from './constants/types';

export const getClient = (() => {
  let client: QueryClient | null = null;

  return () => {
    if (!client)
      client = new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: 1000 * 60 * 60 * 24,
            staleTime: 1000 * 60,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      });
    return client;
  };
})();

export const QueryKeys: { [key: string]: string } = {
  MOCK: 'MOCK',
  FOLIAGES: 'FOLIAGES',
  SLOTHS: 'SLOTHS',
};

const BASE_URL = 'http://localhost:5173';

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
}): Promise<any> => {
  let url = `${BASE_URL}${path}`;
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': BASE_URL,
    },
  };

  if (params) {
    const searchParams = new URLSearchParams(params);
    url += '?' + searchParams.toString();
  }

  if (body) {
    options.body = JSON.stringify(body);
  }

  return fetch(url, options)
    .then((res) => res.json())
    .then((json) => json)
    .catch((error) => console.error(error));
};
