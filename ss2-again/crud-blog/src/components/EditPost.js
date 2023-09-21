import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import *as Yup from "yup";
import { editBlog, findByIdBlog } from "../service/BlogService";

function EditBlog() {
    const param = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);

    const handleFindById = async () => {
        const result = await findByIdBlog(param.id);
        setBlog(result);
    }

    const handleEdit = async (object) => {
        await editBlog(param.id,object);
        navigate("/");
    }
    useEffect(() => {
        handleFindById();
        console.log(blog);
    }, [])

    if (blog == null) {
        return null;
    }
    return (
        <>
            <Formik
                initialValues={blog}

                validationSchema={Yup.object({
                    title: Yup.string().required("can not required"),
                    slug: Yup.string().required("can not required"),
                    category: Yup.string().required("can not required"),
                    content: Yup.string().required("can not required")
                })}

                onSubmit={(value) => {
                    handleEdit(value);
                }}
            >
                <Form>
                    <label htmlFor="title">Title:</label>
                    <Field name="title" type="text" />
                    <ErrorMessage component="span" name="title" />
                    <br />
                    <br />
                    <label htmlFor="slug">Slug</label>
                    <Field name="slug" type="text" />
                    <ErrorMessage component="span" name="slug" />
                    <br />
                    <br />
                    <label htmlFor="category">Category</label>
                    <Field name="category" type="text" />
                    <ErrorMessage name="category" component="span" />
                    <br />
                    <br />
                    <label htmlFor="content">Content</label>
                    <Field name="content" type="text" />
                    <ErrorMessage component="span" name="content" />
                    <br />
                    <br />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    )
}

export default EditBlog;