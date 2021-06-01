import React from 'react';
import './App.css';
import HomeContainer from './components/HomeContainer'
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HomeContainer></HomeContainer>
    </div>
  );
}

export default App;
