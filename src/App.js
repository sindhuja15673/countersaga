import React from 'react';
import Counter from './counter';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <h1 className='title'>Counter APP</h1>
      <div className="App">
        
        <Counter/>

      </div>
    </Provider>
  );
}

export default App;
