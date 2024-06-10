import React from 'react';
import './App.css';
import Gallery from './Gallery';

function App() {

  let styleDiv={
    justifyContent:"center",
    border:"5px solid black", 
    borderRadius:"10px",
    backgroundColor:"rgba(0,0,20,0.5)",
  };

  let styleH1={
    textDecoration:"underline",
    textAlign:"center",
    fontSize:"50px",
    color:"rgba(255,100,0,0.7)",
    paddingTop:"200px",
  
  };

  return (
    <>
    <h1 style={styleH1}>Visit BANARAS(Baba Bholenath Ki Nagri)</h1>
    <h1 style={styleH1}></h1>
    <div className="App" style={styleDiv}>
      <header className="App-header">
        <h1>Places Gallery</h1>
      </header>
      <Gallery />
  
     </div>
     </>
  );
}

export default App;

