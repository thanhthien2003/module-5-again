import { Formik } from "formik";
import { useEffect, useState } from "react";
import * as postService from '../service/postService'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export function ShowList() {
    const [listPost, setListPost] = useState([]);

    const getAll = async () => {
        const result = await postService.findAll();
        setListPost(result);
        console.log(result);
    }

    useEffect(() => {
        getAll();
    }, [])
if(!listPost){
    return null;
}
    return (
        <>
            <Link to="/createPost">Go to add</Link>
            <table className="post-list table table-striped ">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>TITLE</td>
                        <td>SLUG</td>
                        <td>CATEGORY</td>
                        <td>THUMBNAIL URL</td>
                    </tr>
                </thead>
                <tbody>
                   {listPost.map((post,index)=>(
                     <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{post.title}</td>
                            <td>{post.slug}</td>
                            <td>{post.category}</td>
                            <td>{post.url}</td>
                            </tr>
                    
                   ))}
                       
                </tbody>

            </table>
        </>
    )
}