import React from 'react';
import { Footer } from './components/footer/Footer';
import { HomePage } from './components/HomePage';
import { TopNavBar } from './components/topNavBar/TopNavBar';

import './App.css'

function App() {
  return (
    <div className='App'>
      <TopNavBar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
