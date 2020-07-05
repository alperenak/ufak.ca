import React from 'react';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';

function App() {
  return (
    <div className="container flex flex-dir-col">
      <Header />
      <Main />
    </div>
  );
}

export default App;
