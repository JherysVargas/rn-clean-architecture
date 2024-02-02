import React from 'react';
import {Provider} from 'react-redux';
import {store} from './lib/core/providers/config';
import Routes from './lib/config/routes';
import moment from 'moment';
import 'moment/locale/es';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

moment.locale('es');

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
