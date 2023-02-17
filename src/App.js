import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@root/App.scss';
import { AppRouter } from '@root/routes';
import { Provider } from 'react-redux';
import { store } from '@redux/store';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
