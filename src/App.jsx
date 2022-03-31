import React , {useState} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.scss'
import Menu from './Main/Menu'
import Content from './Main/Content'
import Store from './data/Store'

function App() {
  
  return (
    <div className="App">
      <Store>
        <Router>
          <Menu/>
          <Content/>
        </Router>
      </Store>
    </div>
  );
}

export default App
