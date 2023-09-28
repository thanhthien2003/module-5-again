import './App.css';
import { Route, Routes } from 'react-router-dom';
import ListContract from './components/contact/ListContract'
import Home from './components/simple/Home';
import ListService from './components/services/ListService';
import ListCustomer from './components/customer/ListCustomer';
import CreateContact from './components/contact/CreateContact';
import CreateCustomer from './components/customer/CreateCustomer';
import EditCustomer from './components/customer/EditCustomer';
import EditContract from './components/contact/EditContract';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contract' element={<ListContract />}/>
      <Route path='/service' element={<ListService />}/>
      <Route path='/customer' element={<ListCustomer />}/>
      <Route path='/contract/create' element={<CreateContact />}/>
      <Route path='/contract/edit/:id' element={<EditContract />} />
      <Route path='/customer/create' element={<CreateCustomer />}/>
      <Route path='/customer/edit/:id' element={<EditCustomer />} />
    </Routes>
    </>
  );
}

export default App;
