import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import {Routes, Route, useLocation} from 'react-router-dom'
import Header from './components/Header';


function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
    </>
  );
}

export default App;
