
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainFile from './components/main';


function App() {
    return (
      <BrowserRouter>
            <Routes>
             <Route path='/' element={<MainFile />} />
            </Routes>
            </BrowserRouter>
    );
}

export default App;
