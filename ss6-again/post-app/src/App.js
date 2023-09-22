import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ShowList } from './components/showList';
import { CreatePost } from './components/createPost';

function App() {
  return (
   
    <Routes>
      <Route path='/' element={<ShowList />}></Route>
      <Route path='/createPost' element={<CreatePost />}></Route>
    </Routes>
  
  );
}

export default App;
