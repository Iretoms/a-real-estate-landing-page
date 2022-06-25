import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import {Routes, Route, useLocation} from 'react-router-dom'
import Header from './components/Header';
import Description from './components/sections/Description';
import Search from './components/sections/Search';
import HowToUse from './components/sections/HowToUse';
import ChooseUs from './components/sections/ChooseUs';


function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Description/>
      <Search/>
      <HowToUse/>
      <ChooseUs/>
    </>
  );
}

export default App;
