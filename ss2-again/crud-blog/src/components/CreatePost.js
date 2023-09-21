import {Form, Formik , ErrorMessage , Field} from "formik"
import { useNavigate } from "react-router";
import *as Yup from "yup";
import { createBlog } from "../service/BlogService";

function CreatePost() { 

    const navigate = useNavigate();
    const date = new Date();

    const handleCreate = async (blog) => {
            await createBlog(blog);
            navigate('/');
    }
    return(
        <>
        <Formik 
        initialValues={{
            title:"",
            slug:"",
            category:"",
            content:"",
            updatedAt: date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
        }}

        validationSchema={Yup.object(
            {
                title: Yup.string().required("can not required"),
                slug: Yup.string().required("can not required"),
                category: Yup.string().required("can not required"),
                content: Yup.string().required("can not required")
            }
        )}
        
        onSubmit={async (value) => {
            await handleCreate(value);
        }}

        >
            <Form>
            <label htmlFor="title">Title:</label>    
            <Field name="title" type="text" />
            <ErrorMessage component="span" name="title"  />
            <br/>
            <br/>
            <label htmlFor="slug">Slug</label>
            <Field name="slug" type="text" />
            <ErrorMessage component="span" name="slug" />
            <br/>
            <br/>
            <label htmlFor="category">Category</label>
            <Field name="category" type="text" />
            <ErrorMessage name="category" component="span" />
            <br/>
            <br/>
            <label htmlFor="content">Content</label>
            <Field name="content" type="text" />
            <ErrorMessage component="span" name="content" />
            <br/>
            <br/>
            <button type="submit">Submit</button>
            </Form>
        </Formik>
        </>
    )
}

export default CreatePost;