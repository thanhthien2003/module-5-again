import { useEffect, useState } from "react";
import { getAllBlog } from "../service/BlogService";
import { getAllCategory } from "../service/CategoryService";
import { NavLink } from "react-router-dom";

function ListBlog() {
    const [blogList,setBlogList] = useState([]);
    const [categoryList,setCategoryList] = useState([]);

    const handleGetListBlog = async () => {
        setBlogList(await getAllBlog());
    }
    const handleGetCategoryList = async () => {
        setCategoryList(await getAllCategory());
    }

    useEffect(()=>{
        handleGetCategoryList();
        handleGetListBlog();
    },[])

    return(
        <>
        <NavLink className="btn btn-primary" to="/create">Create</NavLink>
        <table>
            <thead>
                <th>STT</th>
                <th>Title</th>
                <th>Category</th>
            </thead>
            <tbody>
                {blogList.map((element,index) => {
                    return(
                        <tr key={element.id}>
                            <td>{index+1}</td>
                            <td>{element.title}</td>
                            <td>{element.category.body}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}

export default ListBlog;