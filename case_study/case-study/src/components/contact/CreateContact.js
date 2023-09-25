import React from "react";
import Header from "../simple/Header";
import Footer from "../simple/Footer";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import *as Yup from "yup";
import { createContract } from "../../service/ContractService";


function CreateContact() {
  const navigate = useNavigate();
  const handleCreate = async (obj) => {
    const res = await createContract(obj);
  }

    return (
        <>
        <Header />
        <Formik
          initialValues={{
            contractKey: "",
            dayStart: "",
            dayEnd: "",
            downPayment: 0,
            totalAmount: 0,
        }}
        onSubmit={ async (values) => {
            await handleCreate(values);
            navigate('/contract');
        }}
        validationSchema={Yup.object({
          contractKey: Yup.string()
                .required("Can not require"),
                dayStart: Yup.string()
                .required("Can not require"),
                dayEnd: Yup.string()
                .required("Can not require"),
                downPayment: Yup.number()
                .required("Can not require")
                .min(1, "Greater than zero"),
                totalAmount: Yup.number()
                .required("Can not require")
                .min(1,"Greater than zero")
        })}
        >
        <div>
          <div className="back_re">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="title">
                    <h2>NEW CONTRACT</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <Form id="request" className="main_form">
                    <div className="row">
                      <div className="col-md-12 ">
                        <label htmlFor="contractKey">Contract number</label>
                        <Field className="contactus" type="number" name="contractKey" id="contractKey"/>
                        <ErrorMessage name="contractKey" component="span" />
                      </div>
                      <div className="col-md-12">
                      <label htmlFor="dayStart">Day Start</label>
                        <Field className="contactus" type="date" name="dayStart" id="dayStart"/>
                        <ErrorMessage name="dayStart" component="span" />
                      </div>
                      <div className="col-md-12">
                      <label htmlFor="dayEnd">Day End</label>
                        <Field className="contactus" type="date" name="dayEnd" />
                        <ErrorMessage name="dayEnd" component="span" />
                      </div>
                      <div className="col-md-12">
                      <label htmlFor="downPayment">Down Payment</label>
                        <Field className="contactus" placeholder="down payment" type="number"  name="downPayment" id="downPayment"/>
                        <ErrorMessage name="downPayment" component="span" />
                      </div>
                      <div className="col-md-12">
                      <label htmlFor="totalAmount">Total Amount</label>
                        <Field className="contactus" placeholder="Total amount" type="number" name="totalAmount" id="totalAmount"/>
                        <ErrorMessage name="totalAmount" component="span" />
                      </div>
                      <div className="col-md-12">
                        <button className="send_btn" type="submit">Send</button>
                      </div>
                    </div>
                  </Form>
                </div>
                <div className="col-md-6">
                  <div className="map_main">
                    <div className="map-responsive">
                      <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width={600} height={400} frameBorder={0} style={{border: 0, width: '100%'}} allowFullScreen />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Formik>
        <Footer/>
      </>
      );
}
export default CreateContact;