import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import { deletePostRedux, getAllPost } from "../redux/middleware/PostMiddleware";
import { NavLink } from "react-router-dom";
 function PostList() {
    const listPost = useSelector(store=>store.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPost());
    },[])

    const handleDelete = async (postId) => {
            const res = await dispatch(deletePostRedux(postId));
    }
if(!listPost){
    return null;
}
    return (
        <>
        <NavLink to={`/create`} className="btn btn-primary">Create</NavLink>
            <table className="post-list table table-striped ">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>TITLE</td>
                        <td>SLUG</td>
                        <td>CATEGORY</td>
                        <td>THUMBNAIL URL</td>
                        <td>ACTION</td>
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
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDelete(post.id)}>Delete</button>
                            </td>
                            </tr>
                    
                   ))}
                       
                </tbody>

            </table>
        </>
    )
}
export default  PostList;