
import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Frontpage from './components/Frontpage';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Frontpage />} />
    </Routes>
    
  );
}

export default App;
