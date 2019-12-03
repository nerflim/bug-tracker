import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './scss/App.scss';
import Sidebar from './components/includes/Sidebar';

function App() {
  return (
    <div className='App'>
      <div className='flex'>
        <Sidebar />
        <Router>hello world</Router>
      </div>
    </div>
  );
}

export default App;
