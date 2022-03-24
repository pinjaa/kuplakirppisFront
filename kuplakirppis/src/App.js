
import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Frontpage from './components/Frontpage';
import Vaatteet from './pages/Vaatteet';
import Elektroniikka from './pages/Elektroniikka';
import Ajoneuvot from './pages/Ajoneuvot';
import Hifi from './pages/Hifi';
import Keittiö from './pages/Keittiö';
import Koti from './pages/Koti';
import VapaaAika from './pages/VapaaAika';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Frontpage />} />
     <Route path='/pages/Vaatteet' element={<Vaatteet/>}/>
     <Route path='/pages/Elektroniikka' element={<Elektroniikka/>}/>
     <Route path='/pages/Ajoneuvot' element={<Ajoneuvot/>}/>
     <Route path='/pages/Hifi' element={<Hifi/>}/>
     <Route path='/pages/Keittiö' element={<Keittiö/>}/>
     <Route path='/pages/Koti' element={<Koti/>}/>
     <Route path='/pages/VapaaAika' element={<VapaaAika/>}/>
    </Routes>
 
  );
}

export default App;
