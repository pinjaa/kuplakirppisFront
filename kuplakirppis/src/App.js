
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BootstrapCarousel from './components/BootstrapCarousel';
import Categories from './components/Categories';


function App() {
  return (
    <div>
     <Header/>
     <Navbar /> 
     <Categories />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit nulla sequi distinctio, iusto delectus architecto dolor cupiditate sint aliquam, culpa expedita. Dolorum mollitia obcaecati unde tempora aliquam possimus labore!</p>
        <BootstrapCarousel/>
      <Footer/>
    </div>
    
  );
}

export default App;
