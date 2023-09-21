import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Formik, ErrorMessage, Field, Form } from "formik"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom";
import {createCustomer} from "../../service/CustomerService";





function CreateCustomer() {
    const navigate = useNavigate();
    const addCustomer = async (customer) => {
        await createCustomer(customer);
    }

    return (
        <>
            <Formik
                initialValues={
                    {
                        name: '',
                        gender: true,
                        citizenId: 0,
                        phone: 0,
                        email: '',
                        typeOfCustomer: 'Member',
                        address: ''
                    }
                }
                validationSchema={Yup.object({
                    name: Yup.string().required("khong duoc de trong").matches(/[\w]{2,}( [\w]{2,})+/i,"ten khong hop le"),
                    citizenId: Yup.number().required("khong duoc de trong").moreThan(9),
                    phone: Yup.string().required("khong duoc de trong").matches(/^(84|0[3|5|7|8|9])+([0-9]{8})\b$/,"so dien thoai khong hop le"),
                    email: Yup.string().required("khong duoc de trong").email("khong dung dinh dang email"),
                    address: Yup.string().required("khong duoc de trong")

                })}
                onSubmit={async (values) => {
                    await addCustomer(values);
                    navigate('/customer');
                }}
            >

                <Form>
                    <div>
                        <h1 style={{ textAlign: 'center' }}>Add Customer</h1>
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
                                    <select type="select" name="typeOfCustomer">
                                        <option value="Diamond">Diamond</option>
                                        <option value="Platinium">Platinium</option>
                                        <option value="Gold">Gold</option>
                                        <option value="Silver">Silver</option>
                                        <option value="Member">Member</option>
                                    </select>
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
                                        Send Message
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
export default CreateCustomer;