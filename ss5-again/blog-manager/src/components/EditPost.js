import { useNavigate, useParams } from "react-router-dom";
import { list } from "../data/data";
import React, { useEffect, useState } from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"


export default function EditPost(){
    const navigate = useNavigate();
    const param = useParams();
    // const [listPost,setListPost] = useState(list);
    const [post,setPost] =useState(null);
    
    useEffect(() => {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id == param.id) {
                setPost(list[i]);
                break;
            }
        }
    },[post])

    if(post==null){
        return null;
    } 
    console.log(post);
    return(
            <Formik 
            initialValues={post}
                    validationSchema={Yup.object({
                        title: Yup.string().required("Name is not empty") ,
                        slug: Yup.string().required("Slug is not empty"),
                        category: Yup.string().required("Category is not empty"),
                        content: Yup.string().required("Content is not empty"),
                        author: Yup.string().required("Author is not empty"),
                        authorEmail: Yup.string().required("Author-email is not empty").email("Email is not in the correct format")
                    })}
                    onSubmit = {(value) => {
                        for (let i = 0; i < list.length; i++) {
                            if (list[i].id === value.id) {
                                list[i] = {
                                    "id": value.id,
                                    "title": value.title,
                                    "slug": value.title,
                                    "category": value.category,
                                    "content": value.content,
                                    "author": value.author,
                                    "authorEmail": value.authorEmail
                                };
                            }
                        }
                            navigate("/");
                    }}
                    >
                    {(
                            <Form>
                            Title:  <Field type='text' className='form-control' id='title' name='title'/>
                            <ErrorMessage name="title" component='span'/>
                            <br/>
                            Slug:  <Field type='text' className='form-control' id='slug' name='slug'/>
                            <ErrorMessage name="slug" component='span' />
                            <br/>
                            Category:  <Field type='text' className='form-control' id='category' name='category'/>
                            <ErrorMessage name="category" component='span' />
                            <br/>
                            Content:  <Field type='text'  className='form-control' id='content' name='content'/>
                            <ErrorMessage name="content" component='span' />
                            <br/>
                            Author:  <Field type='text'  className='form-control' id='author' name='author'/>
                            <ErrorMessage name="author" component='span' />
                            <br/>
                            Author-Email:  <Field type='email' className='form-control' id='authorEmail' name='authorEmail'/>
                            <ErrorMessage name="authorEmail" component='span' />
                            <br/>
                            <button type='submit' className='btn btn-primary'>Submit</button>  
                            </Form>
                    )}
            </Formik> 
    )
}