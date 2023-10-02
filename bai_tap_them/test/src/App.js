import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListProduct from './components/ListProduct';
import CreateProduct from './components/CreateProduct';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ListProduct />} />
      <Route  path='/create' element={<CreateProduct />} />
    </Routes>
    </BrowserRouter>
    <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
