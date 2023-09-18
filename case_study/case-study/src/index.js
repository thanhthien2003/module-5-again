import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import EditService from './components/EditService';
import ListService from './components/ListService';
import './css/editService.css'
import './css/createService.css'
import CreateService from './components/CreateService';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/service.css'
import './css/createCustomer.css'
import './css/editCustomer.css'
import { BrowserRouter } from 'react-router-dom';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
   <App />
   </BrowserRouter>
);

