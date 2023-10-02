import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { getAllType } from "../services/TypeService";
import * as Yup from "yup";
import { createProduct } from "../services/ProductService";
import { useNavigate } from "react-router";

function CreateProduct() {
    const [listType, setListType] = useState(null);
    const navigate = useNavigate();
    const getType = async () => {
        setListType(await getAllType());
    }
    const handleCreate =  (value) => {
        value.typeProduct = JSON.parse(value.typeProduct);
        const res = createProduct(value);
        navigate("/");
    }
    useEffect(() => {
        getType();
    }, [])
    if (listType == null) {
        return null;
    }
    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    pram: "",
                    mount: "",
                    typeProduct: "",
                    endDay:""
                }}
                validationSchema={Yup.object(
                    {
                        name: Yup.string().required("can not require"),
                        pram: Yup.string().required("can not require"),
                        mount: Yup.string().required("can not require"),
                        typeProduct: Yup.string().required("can not require"),
                        endDay: Yup.string().required("cant not quired")
                    }
                )}
                onSubmit={(values) => {
                    handleCreate(values);
                }}
            >
                <Form>
                    Name:  <Field type="text" name="name" />
                    <ErrorMessage name="name" component="span" />
                    <br/>
                    <br/>
                    Pram : <Field type="text" name="pram" />
                    <ErrorMessage name="pram" component="span" />
                    <br/>
                    <br/>
                    Mount : <Field type="text" name="mount" />
                    <ErrorMessage name="mount" component="span" />
                    <br/>
                    <br/>
                    Type: <Field as="select" name="typeProduct">
                        {listType.map((type, index) => {
                            return (
                                <>
                                    <option value={JSON.stringify(type)}>{type.body}</option>
                                </>
                            )
                        })}
                    </Field>
                    <ErrorMessage  name="typeProduct" component="span"/>
                    <br/>
                    <br/>
                    End Day: <Field  type="date" name="endDay"/>
                    <br/>
                    <br/>
                    <button type="submit" >Submit</button>
                </Form>
            </Formik>
        </>
    )
}

export default CreateProduct;