import { Formik,Form,Field,ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { getAllType } from "../service/TypeService";
import * as Yup from "yup";
import { createProduct } from "../service/ProductService";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function CreateProduct(){
    const [getListType,setListType]=useState();
    const navigate = useNavigate();
    const getListTypeProduct = async () => {
        setListType(await getAllType());
    }
    const handleCreate = async (valuess) => {
        valuess.type = JSON.parse(valuess.type);
        await createProduct(valuess);
        
        navigate("/");
        toast("ok");
    }
    useEffect(()=>{
        getListTypeProduct()
    },[])
    if(getListType == null){
        return null;
    }
    return(
        <>
        <Formik
         initialValues={{
            name:"",
            donvi: "",
            mount:"",
            type:"",
            dayEnd:""
         }} 
         validationSchema={Yup.object({
            name: Yup.string().required("khong trong"),
            donvi: Yup.string().required("khong trong"),
            mount:Yup.number().required("khong trong").positive("khong phai so duong"),
            type:Yup.string().required("khong trong"),
            dayEnd:Yup.string().required("khong trong")
         })}
         onSubmit={async (value) => {
               await handleCreate(value);
         }}
        >
            <Form>
                <label htmlFor="name">Name</label>
                <Field  id="name" name="name" type="text"/>
                <ErrorMessage name="name" component="span" />
                <br/>
                <br/>  
                <label htmlFor="donvi">donvi</label>
                <Field  id="donvi" name="donvi" type="text"/>
                <ErrorMessage name="donvi" component="span" />
                <br/>
                <br/> 
                <label htmlFor="mount">mount</label>
                <Field  id="mount" name="mount" type="number"/>
                <ErrorMessage name="mount" component="span" />
                <br/>
                <br/> 
                <label htmlFor="type">type</label>
                <Field as="select" name="type" id="type"> 
                        <option value={""}>---</option>
                        {getListType.map((types,index) => {
                            return(
                                <>
                                <option key={index} value={JSON.stringify(types)}>{types.name}</option>
                                </>
                            )
                        })}
                </Field>
                <ErrorMessage name="type" component="span" />
                <br/>
                <br/> 
                <label htmlFor="dayEnd">dayEnd</label>
                <Field  id="dayEnd" name="dayEnd" type="date"/>
                <ErrorMessage name="dayEnd" component="span" />
                <br/>
                <br/>  
                    <button type="submit">Create</button>
            </Form>
        </Formik>
        </>
    )
}

export default CreateProduct;