import { useEffect, useState } from "react";
import { deleteBlog, getList } from "../service/BlogService";
import "bootstrap/dist/css/bootstrap.css"
import { NavLink } from "react-router-dom";

function GetList() {
    const [listBlog,setListBlog] = useState([]);
    const handleGetList = async () => {
            const data = await getList();
            setListBlog(data);
    }
    useEffect(() => {
        handleGetList();
        console.log(listBlog);
    },[])
    const handleDelete = async (idDelete) => {
        await deleteBlog(idDelete);
        await handleGetList();
    }

    return(
        <>
        <a href="/create">Create</a>
         <table className="table table-stripped-secondary">
                <thead>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>CATEGORY</th>
                    <th>TIME</th>
                    <th>DELETE</th>
                    <th>UPDATE</th>
                </thead>
                {listBlog.map((post, index) => {
                    return (
                        <tr className="table-success" key={post.id}>
                            <td>{index + 1}</td>
                            <td>{post.title}</td>
                            <td>{post.category}</td>
                            <td>{post.updatedAt}</td>
                            <td>
                                <button onClick={() => {handleDelete(post.id)}} className="btn btn-danger">Delete</button>
                            </td>
                            <td>
                                <NavLink type="button" to={`/edit/${post.id}`} className="btn btn-danger" >Update</NavLink>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}
export default GetList;