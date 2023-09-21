import { Formik, Form, ErrorMessage, Field } from "formik"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import *as Yup from "yup";
import { getAllCategory } from "../service/CategoryService";
import { createBlog } from "../service/BlogService";

function CreateBlog() {
    const navigate = useNavigate();
    const [categoryList, setCategoryList] = useState([]);
    const handleGetCategoryList = async () => {
        setCategoryList(await getAllCategory());
    }
    const handleCreate = async (newBLog) => {
        await createBlog(newBLog);
        navigate("/");
    }
    useEffect(() => {
        handleGetCategoryList();
    }, [])

    return (
        <>
            <Formik
                initialValues={{
                    title: "",
                    category: {
                        id: "",
                        body: ""
                    }
                }}

                validationSchema={Yup.object({
                    title: Yup.string().required("cant required")
                })}

                onSubmit={async (value) => {
                    await handleCreate(value);
                }}
            >
                <Form>
                    Title:  <Field name="title" type="text" />
                    <ErrorMessage name="title" component="span" />
                    Category: <select name="category">
                        {categoryList.map((element, index) => (
                            <option key={index} value={{element}}>{element.body}</option>
                        ))}
                    </select>
                    <ErrorMessage name="category" component="span" />
                    <br>
                    </br>
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            </Formik>
        </>
    )
}
export default CreateBlog;