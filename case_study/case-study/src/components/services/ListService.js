import React, { useEffect, useState } from "react";
import Header from "../simple/Header";
import Footer from "../simple/Footer";
import { getAllService } from "../../service/ServiceAxios";


function ListService() {
    const [listService,setListService] = useState([]);
    const getListService = async () => {
        setListService(await getAllService());
    }

    useEffect(()=>{
        getListService();
    },[])
    return (
        <>
        <Header/>
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
                    <div className="col-md-4 col-sm-6">
                        <div id="serv_hover" className="room">
                            <div className="room_img">
                                <figure><img src="/images/room1.jpg" alt="#" /></figure>
                            </div>
                            <div className="bed_room">
                                <h3>Bed Room</h3>
                                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                            </div>
                            <div className="bed_room row">
                                <a className="nav-link col-md-6 col-sm-6" href="editService.html">
                                    <button className="btn btn-primary">
                                        <i
                                            className="fa-regular fa-pen-to-square"></i>
                                    </button>
                                </a>
                                <a className="nav-link col-md-6 col-sm-6">
                                    <button className="btn btn-danger">
                                        <i
                                            className="fa-regular fa-trash-can"></i>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div id="serv_hover" className="room">
                            <div className="room_img">
                                <figure><img src="/images/room2.jpg" alt="#" /></figure>
                            </div>
                            <div className="bed_room">
                                <h3>Bed Room</h3>
                                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                            </div>
                            <div className="bed_room row">
                                <a className="nav-link col-md-6 col-sm-6" href="editService.html">
                                    <button className="btn btn-primary">
                                        <i
                                            className="fa-regular fa-pen-to-square"></i>
                                    </button>
                                </a>
                                <a className="nav-link col-md-6 col-sm-6">
                                    <button className="btn btn-danger">
                                        <i
                                            className="fa-regular fa-trash-can"></i>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div id="serv_hover" className="room">
                            <div className="room_img">
                                <figure><img src="/images/room3.jpg" alt="#" /></figure>
                            </div>
                            <div className="bed_room">
                                <h3>Bed Room</h3>
                                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                            </div>
                            <div className="bed_room row">
                                <a className="nav-link col-md-6 col-sm-6" href="editService.html">
                                    <button className="btn btn-primary">
                                        <i
                                            className="fa-regular fa-pen-to-square"></i>
                                    </button>
                                </a>
                                <a className="nav-link col-md-6 col-sm-6">
                                    <button className="btn btn-danger">
                                        <i
                                            className="fa-regular fa-trash-can"></i>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div id="serv_hover" className="room">
                            <div className="room_img">
                                <figure><img src="/images/room4.jpg" alt="#" /></figure>
                            </div>
                            <div className="bed_room">
                                <h3>Bed Room</h3>
                                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                            </div>
                            <div className="bed_room row">
                                <a className="nav-link col-md-6 col-sm-6" href="editService.html">
                                    <button className="btn btn-primary">
                                        <i
                                            className="fa-regular fa-pen-to-square"></i>
                                    </button>
                                </a>
                                <a className="nav-link col-md-6 col-sm-6">
                                    <button className="btn btn-danger">
                                        <i
                                            className="fa-regular fa-trash-can"></i>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div id="serv_hover" className="room">
                            <div class="room_img">
                                <figure><img src="/images/room5.jpg" alt="#" /></figure>
                            </div>
                            <div className="bed_room">
                                <h3>Bed Room</h3>
                                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                            </div>
                            <div className="bed_room row">
                                <a className="nav-link col-md-6 col-sm-6" href="editService.html">
                                    <button className="btn btn-primary">
                                        <i
                                            className="fa-regular fa-pen-to-square"></i>
                                    </button>
                                </a>
                                <a className="nav-link col-md-6 col-sm-6">
                                    <button className="btn btn-danger">
                                        <i
                                            className="fa-regular fa-trash-can"></i>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div id="serv_hover" className="room">
                            <div className="room_img">
                                <figure><img src="/images/room6.jpg" alt="#" /></figure>
                            </div>
                            <div className="bed_room">
                                <h3>Bed Room</h3>
                                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                            </div>
                            <div className="bed_room row">
                                <a className="nav-link col-md-6 col-sm-6" href="editService.html">
                                    <button className="btn btn-primary">
                                        <i
                                            className="fa-regular fa-pen-to-square"></i>
                                    </button>
                                </a>
                                <a className="nav-link col-md-6 col-sm-6">
                                    <button className="btn btn-danger">
                                        <i
                                            className="fa-regular fa-trash-can"></i>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        
        </>
        
    )
}
export default ListService;