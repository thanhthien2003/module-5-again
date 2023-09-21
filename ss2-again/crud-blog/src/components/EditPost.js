import { Formik,Form,Field,ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import *as Yup from "yup";
import { findByIdBlog } from "../service/BlogService";

function EditBlog() {
    const param = useParams();
    const [blog,setBlog] = useState(null);

    const handleFindById = async () => {
        const result = await findByIdBlog(param.id);
        setBlog(result);
    }
    useEffect(() => {
        handleFindById();
        console.log(blog);
    },[])

    if(blog == null) {
        return null;
    }
    return(
        <>
        
        </>
    )
}

export default EditBlog;