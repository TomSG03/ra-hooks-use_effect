import React from 'react'
import './App.css';
import List from './List/List';

const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/'

function App() {
  return (
    <div className="App">
      <List url={url} />
    </div>
  );
}

export default App;
