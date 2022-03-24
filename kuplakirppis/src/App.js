
import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Frontpage from './components/Frontpage';
import Vaatteet from './pages/Vaatteet';
import Elektroniikka from './pages/Elektroniikka';
import Ajoneuvot from './pages/Ajoneuvot';
import Hifi from './pages/Hifi';
import Keittio from './pages/Keittio';
import Koti from './pages/Koti';
import VapaaAika from './pages/VapaaAika';



function App() {
  return (
    <Routes>
     <Route path='/' element={<Frontpage />} />
     <Route path='/Vaatteet' element={<Vaatteet/>}/>
     <Route path='/Elektroniikka' element={<Elektroniikka/>}/>
     <Route path='/Ajoneuvot' element={<Ajoneuvot/>}/>
     <Route path='/Hifi' element={<Hifi/>}/>
     <Route path='/Keittio' element={<Keittio/>}/>
     <Route path='/Koti' element={<Koti/>}/>
     <Route path='/VapaaAika' element={<VapaaAika/>}/>
    </Routes>
 
  );
}

export default App;
