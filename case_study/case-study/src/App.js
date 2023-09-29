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
import CreateHouse from './components/services/CreateHouse';
import { CreateVilla } from './components/services/CreateVila';
import CreateRoom from './components/services/CreateRoom';
import EditFacility from './components/services/EditService';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contract' element={<ListContract />}/>
      <Route path='/service' element={<ListService />}/>
      <Route path='/service/vila' element={<CreateVilla />} />
      <Route path='/service/house' element={<CreateHouse />} />
      <Route path='/service/room' element={<CreateRoom />} />
      <Route path='/service/edit/:id' element={<EditFacility />} />
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
