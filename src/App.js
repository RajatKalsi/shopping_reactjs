import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Heading from './components/heading';
import Card from './components/card';
import Carousel from './components/carousel';
import Offercard from './components/offerCard';
import store from './store';
import {BrowserRouter} from 'react-router-dom';
import {Route,Routes,Link} from 'react-router-dom';


import  Forms  from './components/forms';



function App() {
 
  return (
    <>
    <Navbar/>
   <Routes>
    <Route/>
    </Routes>
    
   
    
   
    <Heading/>
    <Card/> 
    <Carousel/>
    <Offercard />
    </>
  )
}


export default App;

