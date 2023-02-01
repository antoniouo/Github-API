import './app.less'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Main from './main/Main';
import Card from './card/Card';
import Error from './main/Error';



const App = () => {
  return (
    <Router>
      <div className='container'>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/card/:username/:reponame" element={<Card />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Navigate to="/" />} /> 
        </Routes>
      </div>
    </Router>   
  );
};

export default App;

// <Route path="*" element={<Navigate to="/" />} /> - переброс на главную в случае несуществующего url

