import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/index.scss";
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Popular from './pages/Popular';
import Post from './pages/Post';
import Allnews from './pages/Allnews';
import Addpost from './pages/Addpost';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Popular />} />
          <Route path="/post/:postId" element={<Post />} />
          <Route path='/all' element={<Allnews />} />
          <Route path='/add' element={<Addpost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);