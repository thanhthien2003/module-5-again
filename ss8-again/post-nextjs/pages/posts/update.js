import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { useRouter } from "next/router";
import { format } from "date-fns";
import axios from "axios";
import Router from "next/router";

export default function UpdateBlog(props) {
    const router = useRouter();
    const { id, details } = router.query;
    const [showDetails, setShowDetails] = useState(details);
    console.log("ID" + id);
    console.log(showDetails);

    const handleSubmit = async (values) => {
        const time = format(new Date(), "MMMM dd, yyyy pp");
        const updatedBlog = {
            ...values,
            slug: values.title.toLowerCase().replaceAll(" ", "-"),
            updatedAt: time,
        };
        console.log("im here");
        await axios.put(
            "http://localhost:8080/posts/" + updatedBlog.id,
            updatedBlog
        );
        Router.back();
        alert("Updated successfully!");
    };

    return (
        <>
            <div className=" container-sm">
                <h1>{details ? "Post Details" : "Update Post"}</h1>
                <Formik
                    initialValues={{
                        ...props.post,
                    }}
                    validationSchema={yup.object({
                        title: yup.string().required("Please fill in title!"),
                        category: yup.string().required("Please fill in category!"),
                        content: yup.string().required("Please fill in content!"),
                        author: yup.string().required("Please fill in author!"),
                        author_email: yup
                            .string()
                            .matches(
                                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                "Incorret format!"
                            )
                            .required("Please fill in author's email!"),
                    })}
                    onSubmit={(values) => handleSubmit(values)}
                >
                    <Form>
                        <div>
                            <label htmlFor="title">Title:</label>
                            <Field
                                type="text"
                                readOnly={details}
                                id="title"
                                name="title"
                                className=" form-control"
                            ></Field>
                            <ErrorMessage
                                name="title"
                                component="span"
                                className=" text-danger"
                            ></ErrorMessage>
                        </div>
                        <div>
                            <label htmlFor="category">Category:</label>
                            <Field
                                type="text"
                                readOnly={details}
                                id="category"
                                name="category"
                                className=" form-control"
                            ></Field>
                            <ErrorMessage
                                name="category"
                                component="span"
                                className=" text-danger"
                            ></ErrorMessage>
                        </div>
                        <div>
                            <label htmlFor="content">Content:</label>
                            <Field
                                readOnly={details}
                                type="text"
                                id="content"
                                name="content"
                                className=" form-control"
                            ></Field>
                            <ErrorMessage
                                name="content"
                                component="span"
                                className=" text-danger"
                            ></ErrorMessage>
                        </div>
                        <div>
                            <label htmlFor="author">Author:</label>
                            <Field
                                readOnly={details}
                                type="text"
                                id="author"
                                name="author"
                                className=" form-control"
                            ></Field>
                            <ErrorMessage
                                name="author"
                                component="span"
                                className=" text-danger"
                            ></ErrorMessage>
                        </div>
                        <div>
                            <label htmlFor="author_email">Author's Email:</label>
                            <Field
                                readOnly={details}
                                type="text"
                                id="author_email"
                                name="author_email"
                                className=" form-control"
                            ></Field>
                            <ErrorMessage
                                name="author_email"
                                component="span"
                                className=" text-danger"
                            ></ErrorMessage>
                        </div>
                        {!details && (
                            <button type="submit" className=" btn btn-info my-3">
                                Update
                            </button>
                        )}
                    </Form>
                </Formik>
            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    const { query, params, resolvedUrl } = context;
    console.log("yo");
    console.log(query);
    console.log(params);
    console.log(resolvedUrl);

    const response = await axios.get("http://localhost:8080/posts/" + query.id);

    return {
        props: {
            post: response.data,
        },
    };
}