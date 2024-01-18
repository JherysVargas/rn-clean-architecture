import React from 'react';
import {Provider} from 'react-redux';
import {store} from './lib/core/providers/config';
import Routes from './lib/config/routes';
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
