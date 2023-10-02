import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListBook from "./components/ListBook";
import CreateBook from "./components/CreateBook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ListBook />} />
      <Route path="/create" element={<CreateBook />} />
    </Routes>
    </BrowserRouter>
    <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
