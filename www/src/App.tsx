import React from 'react';
import { useRoutes } from 'react-router';
import { routes } from './routes';
import { getClient } from './queryClient';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { getStore } from './modules';
import SessionContext from './contexts/SessionContext';

function App() {
  const element = useRoutes(routes);
  const queryClient = getClient();
  const store = getStore();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <SessionContext>{element}</SessionContext>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
