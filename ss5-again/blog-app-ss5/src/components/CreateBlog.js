import { Formik, Form, ErrorMessage, Field } from "formik"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import *as Yup from "yup";
import { getAllCategory } from "../service/CategoryService";
import { createBlog } from "../service/BlogService";

function CreateBlog() {
    const navigate = useNavigate();
    const [categoryList, setCategoryList] = useState();

    useEffect(() => {
        handleGetCategoryList();
    
   }, [])
   
    const handleGetCategoryList = async () => {
    
        setCategoryList(await getAllCategory());
       
    }
    const handleCreate = async (newBLog) => {
        try {
            console.log(newBLog);
            newBLog.category = JSON.parse(newBLog.category);
            await createBlog(newBLog);
            navigate("/");
          } catch (error) {
            console.error("Error parsing JSON:", error);
          }
    }
   

    return (
        <>
        {!categoryList ? "": 
            <Formik
                initialValues={{
                    title: "",
                    category: JSON.stringify(categoryList[0])
                }}

                validationSchema={Yup.object({
                    title: Yup.string().required("cant required")
                })}

                onSubmit={ (value) => {
                     handleCreate(value);
                }}
            >
                <Form>
                    Title:  <Field name="title" type="text" />
                    <ErrorMessage name="title" component="span" />
                    Category: <Field name="category" as="select">
                        {categoryList.map((element) => (
                            <option key={element.id} value={JSON.stringify(element)}>{element.body}</option>
                        ))}
                    </Field>
                    <ErrorMessage name="category" component="span" />
                    <br>
                    </br>
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            </Formik>
}
        </>
    )
}
export default CreateBlog;