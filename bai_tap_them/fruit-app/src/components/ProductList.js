import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteProduct, findByNameOrType, getAllProduct } from "../services/ProductService";
import { getAllType } from "../services/TypeService";

function ProductList(){
    const [productList,setProductList] = useState(null);
    const [listType, setListType] = useState(null);
    const [nameSearch,setNameSearch] = useState("");
    const [typeSearch,setTypeSearch] =useState("");
    const getList = async () => {
        setProductList(await findByNameOrType(nameSearch,typeSearch));
    }
    const getType = async () => {
        setListType(await getAllType());
    }
    const handleDelete = async (id) => {
        const res = await deleteProduct(id);
        getList;
    }
    console.log(typeSearch);
    useEffect(() => {
        getList();
        getType();
    },[nameSearch,typeSearch])
    if(productList==null){
        return null;
    }
    if(listType==null){
        return null;
    }
    return(
        <>
        <Link to={"create"}>Create</Link>
        <br></br>
        <br />
        Name Search : <input onChange={(event)=>setNameSearch(event.target.value)}/>
        <br>
        </br>
        <br>
        </br>
        <select onChange={(event) => setTypeSearch(event.target.value)}>
            <option value={}>----</option>
            {listType.map((type) => {
                return(
                    <>
                    <option value={type.body}>{type.body}</option>
                    </>
                )
            })}
        </select>
        <table>
            <thead>
                <th>STT</th>
                <th>Name</th>
                <th>Dram</th>
                <th>Mount</th>
                <th>Type product</th>
                <th>Day end</th>
                <th>Delete</th>
            </thead>
            <tbody>
                {productList.map((product,index) => {
                    return(
                        <>
                        <tr key={product.id}>
                            <td>{index+1}</td>
                            <td>{product.name}</td>
                            <td>{product.dram}</td>
                            <td>{product.mount}</td>
                            <td>{product.typeProduct.body}</td>
                            <td>{product.endDay}</td>
                            <td>
                                <button onClick={() => handleDelete(product.id)}>Delete</button>
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

export default ProductList;