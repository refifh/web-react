import React from 'react';
import Gmbrheader from './Component/jumbotron';
import './App.css';
import Navigasi from './Component/nav';
import Identitas from './Component/identity';
import Pendidikan from './Component/education';
import Pengalaman from './Component/experience';
import Hubsaya from './Component/callme';


function App() {
  return (
    <>
    <Navigasi /><br/>
    <Gmbrheader />
    <Identitas />
    <Pendidikan />
    <Pengalaman/>
    <Hubsaya/>
    </>
  );
}

export default App;