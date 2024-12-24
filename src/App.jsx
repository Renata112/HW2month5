import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import UserList from './components/UserList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Список пользователей</h1>
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
