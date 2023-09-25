import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/middleware/PostMiddleware";

export function CreatePost() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleAddPost = async (values) => {
        dispatch(addPost(values));
        navigate("/");
    }
    return (
        <>
            <Formik
                initialValues={
                    {
                        id: Math.floor(Math.random() * 100) + 1,
                        title: '',
                        slug: '',
                        category: '',
                        url: ''
                    }
                }
                validationSchema={Yup.object(
                    {
                        title: Yup.string().required("Name is not empty"),
                        slug: Yup.string().required("Name is not empty"),
                        category: Yup.string().required("Name is not empty"),
                        url: Yup.string().required("Name is not empty"),
                    }
                )}
                onSubmit={async (value) => {
                    await handleAddPost(value);
                }}
            >

                {(
                    <Form>
                        Title:  <Field type='text' className='form-control' id='title' name='title' />
                        <ErrorMessage name="title" component='span' />
                        <br />
                        <br />
                        Slug:  <Field type='text' className='form-control' id='slug' name='slug' />
                        <ErrorMessage name="slug" component='span' />
                        <br />
                        <br />
                        Category:  <Field type='text' className='form-control' id='category' name='category' />
                        <ErrorMessage name="category" component='span' />
                        <br />
                        <br />
                        url:  <Field type='text' className='form-control' id='url' name='url' />
                        <ErrorMessage name="url" component='span' />
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                )}

            </Formik>

        </>
    )
}