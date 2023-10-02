import { useEffect, useState } from "react";
import { getAllTypeBook } from "../services/TypeBookService";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.css";
import * as Yup from "yup";
import { createBook } from "../services/BookService";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
function CreateBook() {
    const [listTypeBook, setListTypeBook] = useState(null);
    const navigate = useNavigate();
    const getTypeBook = async () => {
        setListTypeBook(await getAllTypeBook());
    }
    const handleCreate = async (newBook) => {
        newBook.typeBook = JSON.parse(newBook.typeBook);
        const res = await createBook(newBook);
        if (res.status == 201) {
            toast("Create success!!")
            navigate("/")
        } else {
            toast("Fail create , check form submit please!")
        }
    }
    useEffect(() => {
        getTypeBook();
    }, [])
    if (listTypeBook === null) {
        return null;
    }
    console.log(listTypeBook);
    return (
        <>
            <h1 style={{textAlign:'center'}}>Create new Book</h1>
            <Formik
                initialValues={{
                    idBook: "",
                    name: "",
                    typeBook: "",
                    dayStart: "",
                    count: 0
                }}

                validationSchema={Yup.object({
                    idBook: Yup.string().required("Can not require this field").matches(/^(BO-)[0-9]{4}$/, "This id book not corret , can you try : BO-XXXX when X is number"),
                    name: Yup.string().required("Can not require this field").max(100, "Can not longer 100"),
                    typeBook: Yup.string().required("Can not require this field"),
                    dayStart: Yup.date().required("Can not require this field").min(new Date(), "You need select time after today"),
                    count: Yup.number().required("Can not require this field").min(1, "This Count need more than 0").min(1, "The count can not is zero")
                })}
                onSubmit={async (value) => {
                    await handleCreate(value)
                }}
            >
                <Form className="form-control" style={{width:'1000px',textAlign:'center',marginLeft:'250px'}}>
                    <label htmlFor="idBook">ID Book</label>
                    <Field className="form-control" type="text" name="idBook" id="idBook" />
                    <ErrorMessage name="idBook" component="span" />
                    <br />
                    <br />
                    <label htmlFor="name">Name book</label>
                    <Field className="form-control" type="text" name="name" id="name" />
                    <ErrorMessage name="name" component="span" />
                    <br />
                    <br />
                    <label htmlFor="typeBook">Type Book</label>
                    <Field className="form-control" as="select" name="typeBook" id="itypeBookdBook">
                        <option value={""}>---Select---</option>
                        {listTypeBook.map((type) => {
                            return (
                                <>
                                    <option key={type.id} value={JSON.stringify(type)}>{type.name}</option>
                                </>
                            )
                        })}
                    </Field>
                    <ErrorMessage name="typeBook" component="span" />
                    <br />
                    <br />
                    <label htmlFor="dayStart">Day Start</label>
                    <Field className="form-control" type="date" name="dayStart" id="dayStart" />
                    <ErrorMessage name="dayStart" component="span" />
                    <br />
                    <br />
                    <label htmlFor="count">Count</label>
                    <Field className="form-control" type="text" name="count" id="count" />
                    <ErrorMessage name="count" component="span" />
                    <br />
                    <br />
                    <button type="submit" className="btn btn-primary">Create</button>
                </Form>
            </Formik>
        </>
    )
}

export default CreateBook;