import logo from './logo.svg';
import './App.css';
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify";
import {Routes, Route, Link, NavLink} from "react-router-dom";
import {StudentList} from "./components/student/StudentList";
import {StudentCreate} from "./components/student/StudentCreate";
import {StudentUpdate} from "./components/student/StudentUpdate";

function App() {
  return (
      <>
        <NavLink to="/students">List</NavLink>
        <NavLink to="/students/add" className="ms-2">Add</NavLink>
        <Routes>
          <Route path="/students" element={<StudentList/>}></Route>
          <Route path="/students/add" element={<StudentCreate/>}></Route>
          <Route path="/students/edit/:id" element={<StudentUpdate/>}></Route>
        </Routes>
        <ToastContainer></ToastContainer>
      </>
  );
}

export default App;
