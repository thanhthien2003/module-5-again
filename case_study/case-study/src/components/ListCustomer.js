import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import Footer from "./Footer";
import buttonCreate from "../css/buttonCreate.css";
import { getAll } from "../service/CustomerService";

function ListCustomer() {
  const [customerList, setCustomerList] = useState([]);
  const getList = async () => {
    const newList = await getAll();
    console.log(newList);
    setCustomerList(newList);
  }

  useEffect(() => {
    getList();
  }, [])

  return (
    <>
      <Header />
      <div className="row">
        <a href="/customer/create">
          <button class="btn-customer">
            Create Customer
          </button>
        </a>
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
              <td>{customer.typeOfCustomer}</td>
              <td>{customer.address}</td>
              <td>
                <a className="btn btn-primary" href="editCustomer.html"><i className="fa-regular fa-pen-to-square" /></a>
              </td>
              <td>
                <a>
                  <button className="btn btn-danger" title="Delete" data-bs-toggle="modal" data-bs-target="#createFacilityModal">
                    <i className="fa-regular fa-trash-can" />
                  </button>
                </a>
              </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Footer />
    </>
  )
}
export default ListCustomer;