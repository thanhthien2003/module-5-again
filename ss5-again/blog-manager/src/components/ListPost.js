import React, { useState } from "react";
import { list } from "../data/data";
// import { ErrorMessage, Field, Form, Formik } from "formik";
// import { Blocks, FidgetSpinner } from "react-loader-spinner"
import { Link, useNavigate } from "react-router-dom";
// import * as Yup from "yup"
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "bootstrap";
import './modal.css';


export default function ListPost() {
    const [id, setId] = useState(0);
    // const [title, setTitle] = useState("");
    // const [category, setCategory] = useState("");
    // const [content, setContent] = useState("");
    // const [slug,setSlug] = useState("");
    // const [author,setAuthor] = useState("");
    // const [authorEmail,setAuthorEmail] = useState("");
    const [modal, setModal] = useState(false);
    const [idDelete, setIdDelete] = useState(0);
    const getIdDelete = (idD) => {
        toggleModal();
        setIdDelete(idD);
    }
    const toggleModal = () => {
        setModal(!modal);
    }
    const [listPost, setListPost] = useState(list);
    const deletePost = (id) => {
        const newList = [...listPost];
        for (let i = 0; i < newList.length; i++) {
            if (newList[i].id == id) {
                newList.splice(i, 1);
                setListPost(newList);
                setId(0);
                break;
            }
        }
        toggleModal();
    }

    return (
        <>
            <Link to="/createPost">Go to add</Link>
            <table className="table table-success table-striped post-list" >
                <thead>
                    <th>STT</th>
                    <th>TITLE</th>
                    <th>CATEGORY</th>
                    <th>CONTENT</th>
                    <th>SLUG</th>
                    <th>AUTHOR</th>
                    <th>AUTHOR-EMAIL</th>
                    <th>ACTIONS</th>
                </thead>
                <tbody>
                    {listPost.map((post, index) => {
                        return (
                            <tr key={post.id}>
                                <td>{index + 1}</td>
                                <td>{post.title}</td>
                                <td>{post.category}</td>
                                <td>{post.content}</td>
                                <td>{post.slug}</td>
                                <td>{post.author}</td>
                                <td>{post.authorEmail}</td>
                                <td>
                                    <Link to={`/editPost/${post.id}`}>Edit</Link>
                                    <button onClick={() => getIdDelete(post.id)} className="btn-modal">Delete</button>
                                </td>
                                
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {modal && (
                                    <div className="modal">
                                        <div className="overlay">
                                            <div className="modal-content">
                                                <h2>Hello Modal</h2>
                                                <button className="close-modal"
                                                    onClick={toggleModal}>
                                                    Close
                                                </button>
                                                <a className='delete-post btn btn-danger' onClick={()=>deletePost(idDelete)}
                                                >Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                )}
        </>
    )
}
