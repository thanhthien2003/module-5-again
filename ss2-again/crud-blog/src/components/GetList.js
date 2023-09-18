import { useEffect, useState } from "react";
import { getList } from "../service/BlogService";
import "bootstrap/dist/css/bootstrap.css"

function GetList() {
    const [listBlog,setListBlog] = useState([]);
    const handleGetList = async () => {
            const data = await getList();
            setListBlog(data);
    }
    useEffect(() => {
        handleGetList();
    },[])

    return(
        <>
         <table className="table table-stripped-secondary">
                <thead>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>CATEGORY</th>
                    <th>TIME</th>
                </thead>
                {listBlog.map((post, index) => {
                    return (
                        <tr className="table-success" key={post.id}>
                            <td>{index + 1}</td>
                            <td>{post.title}</td>
                            <td>{post.category}</td>
                            <td>{post.updatedAt}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}
export default GetList;