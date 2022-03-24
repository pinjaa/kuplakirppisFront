
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
<<<<<<< HEAD
     <Route path='/' element={<Frontpage />} />
=======
      <Route path='/' element={<Frontpage />} />
<<<<<<< HEAD
     <Route path='/pages/Vaatteet' element={<Vaatteet/>}/>
     <Route path='/pages/Elektroniikka' element={<Elektroniikka/>}/>
     <Route path='/pages/Ajoneuvot' element={<Ajoneuvot/>}/>
     <Route path='/pages/Hifi' element={<Hifi/>}/>
     <Route path='/pages/Keittio' element={<Keittiö/>}/>
     <Route path='/pages/Koti' element={<Koti/>}/>
     <Route path='/pages/VapaaAika' element={<VapaaAika/>}/>
=======
>>>>>>> f28ef5d4b50fe2c0879e223725559e05a900b503
     <Route path='/Vaatteet' element={<Vaatteet/>}/>
     <Route path='/Elektroniikka' element={<Elektroniikka/>}/>
     <Route path='/Ajoneuvot' element={<Ajoneuvot/>}/>
     <Route path='/Hifi' element={<Hifi/>}/>
     <Route path='/Keittio' element={<Keittio/>}/>
     <Route path='/Koti' element={<Koti/>}/>
     <Route path='/VapaaAika' element={<VapaaAika/>}/>
>>>>>>> 1ce472d80e6caa8b7047a87f8144d60068fe6579
    </Routes>
 
  );
}

export default App;
