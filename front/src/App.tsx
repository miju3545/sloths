import React from 'react';
import { useRoutes } from 'react-router';
import { routes } from './routes';
import { getClient } from './utils/queryClient';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { getStore } from './redux/index';

function App() {
  const element = useRoutes(routes);
  const queryClient = getClient();
  const store = getStore();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>{element}</Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
