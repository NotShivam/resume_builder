import React from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import './App.css';
function App() {
  return (
    <div className="App">
      <div className="content-wrap">
        <Navbar/>
        <Header/>
        <Body/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
