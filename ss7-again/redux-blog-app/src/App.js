import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostList from './components/PostList';
import { Provider } from 'react-redux';
import store from './redux/Store';
import { CreatePost } from './components/CreatePost';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
     <Routes>
      <Route path='/' element={<PostList />}></Route>
      <Route path='/create' element={<CreatePost />}></Route>
    </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;