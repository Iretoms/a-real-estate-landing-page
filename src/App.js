import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import {Routes, Route, useLocation} from 'react-router-dom'
import Header from './components/Header';
import Description from './components/sections/Description';


function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Description/>
    </>
  );
}

export default App;
