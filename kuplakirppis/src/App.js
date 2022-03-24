
import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Frontpage from './components/Frontpage';
import Vaatteet from './pages/Vaatteet';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Frontpage />} />
     <Route path='/pages/Vaatteet' element={<Vaatteet/>}/>
    </Routes>
    
  );
}

export default App;
