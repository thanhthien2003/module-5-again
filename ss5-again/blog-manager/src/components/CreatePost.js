import React from "react";
import { list } from "../data/data";
import {ErrorMessage, Field, Form, Formik} from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup"


function CreatePost() {
    const navigate  = useNavigate();
    return(
        <>
    <Formik 
            initialValues={
                        {
                            id:Math.floor(Math.random() * 100) +1,
                            title:'',
                            slug:'',
                            category:'',
                            content:'',
                            author:'',
                            authorEmail:''
                        }
                    }

                    validationSchema={Yup.object({
                        title: Yup.string().required("Name is not empty") ,
                        slug: Yup.string().required("Name is not empty"),
                        category: Yup.string().required("Name is not empty"),
                        content: Yup.string().required("Name is not empty"),
                        author: Yup.string().required("Name is not empty"),
                        authorEmail: Yup.string().required("Name is not empty").email("Your email not exist")
                    })}
                    onSubmit = {(value) => {
                            list.push(value);
                            navigate("/");
                    }}
                    >
                    {(
                            <Form>
                            Title:  <Field type='text'  className='form-control' id='title' name='title'/>
                            <ErrorMessage name="title" component='span'/>
                            <br/>
                            <br/>
                            Slug:  <Field type='text' className='form-control' id='slug' name='slug'/>
                            <ErrorMessage name="slug" component='span' />
                            <br/>
                            <br/>
                            Category:  <Field type='text' className='form-control' id='category' name='category'/>
                            <ErrorMessage name="category" component='span' />
                            <br/>
                            <br/>
                            Content:  <Field type='text' className='form-control'  id='content' name='content'/>
                            <ErrorMessage name="content" component='span' />
                            <br/>
                            <br/>
                            Author:  <Field type='text' className='form-control' id='author' name='author'/>
                            <ErrorMessage name="author" component='span' />
                            <br/>
                            <br/>
                            Author-Email:  <Field type='email' className='form-control'  id='authorEmail' name='authorEmail'/>
                            <ErrorMessage name="authorEmail" component='span' />
                            <br/>
                            <br/>

                            <button type='submit' className='btn btn-primary'>Submit</button>  
                            </Form>
                    )}
            </Formik>
    </>
    )
}
export default CreatePost;