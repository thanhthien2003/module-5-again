import React from 'react';
import ReactDOM from 'react-dom/client';
import GetList from './components/GetList';
import {BrowserRouter,Route ,Routes,Router} from "react-router-dom";
import CreatePost from './components/CreatePost';
import EditBlog from './components/EditPost';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<GetList />}/>
    <Route path='/create' element={<CreatePost />} />
    <Route path='/edit/:id' element={<EditBlog />} />
  </Routes>
  </BrowserRouter>
  </>
);
