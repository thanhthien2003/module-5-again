import React, { useEffect, useState } from "react";
import Header from "../simple/Header";
import Footer from "../simple/Footer";
import { deleteService, getAllService } from "../../service/FacilityService";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";


function ListService() {
    const [listService, setListService] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [FacilityDelete, setFacilityDelete] = useState({});
    const [refresh, setRefresh] = useState(true);
    const getListService = async () => {
        setListService(await getAllService());
    }

    const handleShowModal = (obj) => {
        setShowModal(true);
        setFacilityDelete(obj);
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setFacilityDelete({});
    }
    const handleDelete = async () => {
        const res = await deleteService(FacilityDelete.id);
        setRefresh(!refresh);
        handleCloseModal();
    }
    console.log(listService)
    useEffect(() => {
        getListService();
    }, [refresh])
    return (
        <>
            <Header />
            <div className="our_room">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <p className="margin_0">Lorem Ipsum available, but the majority have suffered </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {listService.map((facility, index) => {
                            return (
                                <>
                                    <div className="col-md-4 col-sm-6" key={index}>
                                        <div id="serv_hover" className="room">
                                            <div className="room_img">
                                                <figure><img src="/images/room1.jpg" alt="#" /></figure>
                                            </div>
                                            <div className="bed_room">
                                                <h3>{facility.serviceName}</h3>
                                                <p>{facility.roomStandard} </p>
                                                <p>{!facility.amenities ? null : "Amentities : " + facility.amenities} </p>
                                                <p >{!facility.poolArea ? null : "Pool Area : " + facility.poolArea} </p>
                                                <p>{!facility.floors ? null : "Floor : " + facility.floors} </p>
                                                <p>{!facility.freeServices ? null : "Free service : " + facility.freeServices}</p>
                                            </div>
                                            <div className="bed_room row">
                                                <Link className="nav-link col-md-6 col-sm-6 " to={`/service/edit/${facility.id}`}>
                                                    <button className="btn btn-primary">
                                                        <i
                                                            className="fa-regular fa-pen-to-square"></i>
                                                    </button>
                                                </Link>
                                                <Link className="nav-link col-md-6 col-sm-6">
                                                    <button className="btn btn-danger" title="Delete" data-bs-toggle="modal" data-bs-target="#createFacilityModal" onClick={() => handleShowModal(facility)}>
                                                        <i className="fa-regular fa-trash-can" />
                                                    </button>
                                                    <Modal show={showModal} onHide={handleCloseModal}>
                                                        <MyModal action={handleCloseModal} data={FacilityDelete} deleteFunc={handleDelete} />
                                                    </Modal>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />

        </>

    )
}
function MyModal({ action, data, deleteFunc }) {
    return (
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
export default ListService;