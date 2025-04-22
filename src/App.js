
import './App.css';

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ThemeToggle from './ThemeToggle';

const App = () => {
  return (
      <Provider store={store}>
        <ThemeToggle />
      </Provider>
  );
};

export default App;
