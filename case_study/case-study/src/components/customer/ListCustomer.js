import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../simple/Header";
import Footer from "../simple/Footer";
import {deleteCustomer, findAllForName, getAll} from "../../service/CustomerService";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

function ListCustomer() {
  const [customerList, setCustomerList] = useState([]);
  const [showModal,setShowModal] = useState(false);
  const [customerDelete,setCustomerDelete] = useState();
  const limit = 5;
  const [currentPage,setCurrentPage] = useState(0);
  const [totalPage,setTotalPage] = useState();
  const [searchName,setSearchName] = useState("");
  const [refresh,setRefresh] = useState(true);
  const handleShowModal = (obj) => {
    setShowModal(true);
    setCustomerDelete(obj);
  }

  const handleCloseModal = () => {
    setShowModal(false);
    setCustomerDelete({});
  }
  const getList = async (page,nameSearch) => {
    const newList = await findAllForName(page,limit,nameSearch);
    console.log( "currenpage"+currentPage);
    setCustomerList(newList[0]);
    console.log(newList[2]);
    setTotalPage(Math.ceil(newList[1]/limit));
    console.log("totalPage"+ totalPage);
    console.log("data" + newList[0]);
  }

    const prePage = () => {
      setCurrentPage(currentPage-1);
      setRefresh(!refresh);
    }

    const nextPage = () => {
      const totalReal = totalPage-1;
      if(currentPage<totalReal){
        setCurrentPage(currentPage+1);
        setRefresh(!refresh);
      }
    }

    const handleSearch = () => {
      setCurrentPage(0);
      setRefresh(!refresh)
    }
   const handleDelete = async () => {
      const res = await deleteCustomer(customerDelete.id);
      setRefresh(!refresh);
      handleCloseModal();
  }

  useEffect(() => {
    getList(currentPage,searchName);
  }, [refresh])

  return (
    <>
      <Header />
      <div className="row">
        <a href="/customer/create">
          <button class="btn btn-primary">
            Create Customer
          </button>
        </a>
      </div>
      <div>
        <input onChange={(event) => setSearchName(event.target.value) } placeholder="SEARCH"/>
        <button className="btn btn-primary" onClick={handleSearch}>Search</button>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Citizen ID</th>
            <th>Phone</th>
            <th>Email</th>
            <th>type of customer</th>
            <th>Address</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {customerList.map((customer, index) => {
            return (
              <tr key={customer.id}>
              <td>{index+1}</td>
              <td>{customer.name}</td>
              <td>{customer.gender ? "Nam" : "Nu"}</td>
              <td>{customer.citizenId}</td>
              <td>{customer.phone}</td>
              <td>{customer.email}</td>
              <td>{customer.typeOfCustomer.name}</td>
              <td>{customer.address}</td>
              <td>
                <Link className="btn btn-primary" to={`edit/${customer.id}`}><i className="fa-regular fa-pen-to-square" /></Link>
              </td>
              <td>
                <a>
                  <button className="btn btn-danger" title="Delete" data-bs-toggle="modal" data-bs-target="#createFacilityModal" onClick={()=> handleShowModal(customer)}>
                    <i className="fa-regular fa-trash-can" />
                  </button>
                  <Modal show={showModal} onHide={handleCloseModal}>
                      <MyModal action={handleCloseModal} data={customerDelete} deleteFunc={handleDelete}/>
                  </Modal>
                </a>
              </td>
              </tr>
            )
          })}
        </tbody>
      </table>

     <div style={{ whiteSpace: 'nowrap' }}>
  <div style={{ display: 'inline-block', marginRight: '10px' }}>
    <button onClick={() => prePage()} className={`btn btn-primary ${currentPage <= 0 ? "disabled" : ""}`}>
      Previous
    </button>
  </div>
  <div style={{ display: 'inline-block' }}>
    <button onClick={() => nextPage()} className={`btn btn-primary ${currentPage >= (totalPage-1) ? "disabled" : ""}`}>
      Next
    </button>
  </div>
</div>
      <Footer />
    </>
  )
}

function MyModal({action,data,deleteFunc}){
    return(
      <>
      <Modal.Header>
          <Modal.Title>{data.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          Are you sure to delete {data.name} ?
            This action cannot be undone!
      </Modal.Body>
      <Modal.Footer>
          <Button variant="primary" onClick={action}>Close</Button>
          <Button variant="danger" onClick={deleteFunc}>Delete</Button>
      </Modal.Footer>
      </>
    )
}
export default ListCustomer;