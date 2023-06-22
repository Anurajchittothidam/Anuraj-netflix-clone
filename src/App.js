import './App.css';
import React from 'react';
import Navbar from './components/NavBar/Navbar';
import Banner from './components/Banner/Banner';
import RowPost from './components/Cards/RowPost';
import {action,trending,romance} from './urls'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={trending} title='Trending'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={romance} title='Romance' />
    </div>
  );
}

export default App;
