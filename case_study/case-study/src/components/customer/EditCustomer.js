import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Formik, ErrorMessage, Field, Form } from "formik"
import * as Yup from "yup"
import { useNavigate, useParams } from "react-router-dom";
import { findByIdCustomer, updateCustomer } from "../../service/CustomerService";
import { getAllType } from "../../service/TypeOfCustomerService";

function EditCustomer() {
    const [customer,setCustomer] = useState(null);
    const param = useParams();
    const navigate = useNavigate();
    const [typeList, setTypeList] = useState([]);
    const getCustomerById = async () => {
           setCustomer(await findByIdCustomer(param.id));
    }
    const editCustomer = async (customer) => {
        customer.typeOfCustomer = JSON.parse(customer.typeOfCustomer);
        await updateCustomer(customer);
    }
    const getTypeList = async () => {
        const res = await getAllType();
        console.log(res);
        setTypeList(res);
    }
    useEffect(() => {
        getTypeList();
        getCustomerById();
    },[])

    if(customer === null){
        return null;
    }
    return (
        <>
            <Formik
                initialValues={{
                    ...customer,
                    typeOfCustomer : JSON.stringify(customer.typeOfCustomer)
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required("khong duoc de trong").matches(/[\w]{2,}( [\w]{2,})+/i,"ten khong hop le"),
                    citizenId: Yup.number().required("khong duoc de trong").moreThan(9),
                    phone: Yup.string().required("khong duoc de trong").matches(/^(84|0[3|5|7|8|9])+([0-9]{8})\b$/,"so dien thoai khong hop le"),
                    email: Yup.string().required("khong duoc de trong").email("khong dung dinh dang email"),
                    address: Yup.string().required("khong duoc de trong")

                })}
                onSubmit={async (values) => {
                    await editCustomer(values);
                    navigate('/customer');
                }}
            >

                <Form>
                    <div>
                        <h1 style={{ textAlign: 'center' }}>Update Customer</h1>
                        <div className="formbold-main-wrapper">
                            <div className="formbold-form-wrapper">
                                <div className="formbold-flex">
                                    <div>
                                        <label htmlFor="name" className="formbold-form-label"> Name </label>
                                        <Field type="text" name="name" id="name" placeholder="Villa" className="formbold-form" />
                                        <ErrorMessage name="name" component='span' />
                                    </div>
                                </div>
                                <div className="formbold-flex">
                                    <div>
                                        <label htmlFor="phone" className="formbold-form-label"> Phone </label>
                                        <Field type="text" name="phone" id="phone" placeholder="(319) 555-0115" className="formbold-form" />
                                        <ErrorMessage name="phone" component='span' />
                                    </div>
                                </div>
                                <div className="formbold-flex">
                                    <div>
                                        <label>Gender:</label>
                                        <div className="form-row">
                                            <div>
                                                <div className="form-check-row">
                                                    <label className="form-check-label" htmlFor="male">Male</label>
                                                    <Field className="form-check" type="radio" name="gender" id="male" value="true" />

                                                </div>
                                                <div className="form-check-row">
                                                    <label className="form-check-label" htmlFor="female">Female</label>
                                                    <Field className="form-check" type="radio" name="gender" id="female" value="true" />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="formbold--flex">
                                    <div>
                                        <label htmlFor="citizenId" className="formbold-form-label"> Citizen ID </label>
                                        <Field type="text" name="citizenId" id="citizenId" placeholder={123456789} className="formbold-form" />
                                        <ErrorMessage name="citizenId" component='span' />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="formbold-form-label"> Email </label>
                                    <Field type="text" rows={6} name="email" id="email" placeholder="Type your email" className="formbold-form" defaultValue={""} />
                                    <ErrorMessage name="email" component='span' />
                                </div>
                                <div>
                                    <label className="formbold-form-label"> type of customer </label>
                                    <Field as="select" name="typeOfCustomer">
                                        {typeList.map((type) => {
                                            return (
                                                <option value={JSON.stringify(type)}>{type.name}</option>
                                            )
                                        })}
                                    </Field>
                                </div>
                                <br />
                                <div className="formbold-flex">
                                    <div>
                                        <label htmlFor="address" className="formbold-form-label"> Address </label>
                                        <Field type="text" name="address" id="address" placeholder="123 Nguyen Van A" className="formbold-form" />
                                        <ErrorMessage name="address" component='span' />
                                    </div>
                                </div>
                                <div>
                                    <button className="formbold-btn" type="submit">
                                        Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )

}
export default EditCustomer;