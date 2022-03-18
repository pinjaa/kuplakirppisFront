
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Carousel from './components/Carousel';
function App() {
  return (
    <div>
     <Header/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit nulla sequi distinctio, iusto delectus architecto dolor cupiditate sint aliquam, culpa expedita. Dolorum mollitia obcaecati unde tempora aliquam possimus labore!</p>
      <Carousel/>
      <Footer/>
    </div>
    
  );
}

export default App;
