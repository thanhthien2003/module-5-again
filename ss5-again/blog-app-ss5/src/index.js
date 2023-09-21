import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import ListBlog from './components/ListBlog';
import CreateBlog from './components/CreateBlog';
import EditBlog from './components/EditBlog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<ListBlog/>}/>
    <Route path='/create' element={<CreateBlog/>}/>
    <Route path='/edit/:id' element={<EditBlog/>}/>
  </Routes>
  </BrowserRouter>
);