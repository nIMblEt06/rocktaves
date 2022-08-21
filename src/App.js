import React from 'react';
import Home from './Pages/Home';
import Regist from './Pages/Regist';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter basename='/rocktaves'>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/register`} element={<Regist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
