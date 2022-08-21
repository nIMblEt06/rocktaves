import React from 'react';
import Home from './Pages/Home';
import Regist from './Pages/Regist';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter basename='/rocktaves'>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path={`${process.env.PUBLIC_URL}/register`} element={<Regist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
