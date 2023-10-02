import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteProduct, getAllProduct } from "../service/ProductService";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"
import { toast } from "react-toastify";

function ListProduct() {
    const [listProduct, setListProduct] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [refresh, setRefresh] = useState(true);
    const [productDelete, setProductDelete] = useState({});
    const getListProduct = async () => {
        setListProduct(await getAllProduct());
    }
    const handleShow = (product) => {
        setProductDelete(product);
        setShowModal(true);
    }
    const handleOff = () => {
        setShowModal(false);
        setProductDelete({});
    }
    const handleDe = async () => {
        await deleteProduct(productDelete.id);
        setProductDelete({});
        setShowModal(false);
        setRefresh(!refresh);
        
    }

    useEffect(() => {
        getListProduct();
    }, [refresh])
    return (
        <>
            <Link to={"/create"}>Create</Link>

            <table className="table table-stripped">
                <thead>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Don vi</th>
                    <th>Gia</th>
                    <th>Type</th>
                    <th>Day End</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {listProduct.map((product, index) => {
                        return (
                            <>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.donvi}</td>
                                    <td>{product.mount}</td>
                                    <td>{product.type.name}</td>
                                    <td>{product.dayEnd}</td>
                                    <td>
                                        <button  className="btn btn-danger" title="Delete" data-bs-toggle="modal" data-bs-target="#createFacilityModal" onClick={() => handleShow(product)}>Delete</button>
                                        <Modal show={showModal} onHide={handleOff} >
                                            <MyModal data={productDelete} handleDelete={handleDe} cancel={handleOff} />
                                        </Modal>
                                    </td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

function MyModal({ data, handleDelete, cancel }) {
    return (
        <>
            <Modal.Header>
                <Modal.Title>Delete product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are u sure ? {data.name}

            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleDelete}>Delete</Button>
                <Button variant="primary" onClick={cancel}>Cancel</Button>
            </Modal.Footer>
        </>
    )
}

export default ListProduct;