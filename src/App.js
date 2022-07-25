import React, { useState } from "react";
import './App.css';
import {Navbar} from './components/Navbar';
import { Layout } from './components/Layout';
 

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Layout/>
  
    </div>
  );
}

export default App;
