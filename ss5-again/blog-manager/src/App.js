import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreatePost from './components/CreatePost';

import EditPost from './components/EditPost';
import ListPost from './components/ListPost';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListPost/>} />
        <Route path='/createPost' element={<CreatePost />} />
        <Route path='/editPost/:id' element={<EditPost />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
