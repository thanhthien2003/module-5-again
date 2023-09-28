import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Header from "../simple/Header";
import Footer from "../simple/Footer";
import { deleteContract, getAllContract } from "../../service/ContractService";
import { Link, NavLink } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

function ListContract() {
    const [contractList, setContractList] = useState([]);
    const [totalPage, setTotalPage] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [refresh, setRefresh] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [contractDelete, setContractDelete] = useState({});
    const limit = 5;
    const getList = async () => {
        getAllContract(currentPage, limit).then(res => {
            setContractList(res[1]);
            setTotalPage(Math.ceil(res[0] / limit));
        });
    }

    const handleShowModal = (value) => {
        setContractDelete(value);
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
        setContractDelete({});
    }
    const handleDelete = async () => {
        const res = await deleteContract(contractDelete);
        setRefresh(!refresh);
        handleCloseModal();
    }

    const nextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
            setRefresh(!refresh);
        }
    }
    const prePage = () => {
        setCurrentPage(currentPage - 1);
        setRefresh(!refresh);
    }

    useEffect(() => {
        getList(currentPage, limit);
    }, [refresh])

    return (
        <>
            <Header />
            <div>
                <NavLink to={`/contract/create`} className="btn btn-primary">New Contract</NavLink>
            </div>
            <br />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Contract number</th>
                        <th>Day start</th>
                        <th>Day end</th>
                        <th>Down Payment</th>
                        <th>Total amount</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {contractList.map((contract, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{contract.contractKey}</td>
                                <td>{contract.dayStart}</td>
                                <td>{contract.dayEnd}</td>
                                <td>{contract.downPayment}</td>
                                <td>{contract.totalAmount}</td>
                                <td>
                                    <Link className="btn btn-primary" to={`edit/${contract.id}`}><i className="fa-regular fa-pen-to-square" /></Link>
                                </td>
                                <td>
                                    <button className="btn btn-danger" title="Delete" onClick={() => handleShowModal(contract)}>
                                        <i className="fa-regular fa-trash-can" />
                                    </button>
                                    <Modal show={showModal} onHide={handleCloseModal}>
                                        <MyModal action={handleCloseModal} data={contractDelete} deleteFunc={handleDelete} />
                                    </Modal>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
            {contractList.length === 0 ? "" :
                <div style={{ whiteSpace: 'nowrap' }}>
                    <div style={{ display: 'inline-block', marginRight: '10px' }}>
                        <button onClick={() => prePage()} className={`btn btn-primary ${currentPage <= 1 ? "disabled" : ""}`} >Previous</button>
                    </div>
                    <div style={{ display: 'inline-block' }}>
                        <button onClick={() => nextPage()} className={`btn btn-primary ${currentPage >= totalPage ? "disabled" : ""}`}>Next</button>
                    </div>
                </div>
            }

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
export default ListContract;