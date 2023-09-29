import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { createService } from '../../service/FacilityService';
import Header from '../simple/Header';
import Footer from '../simple/Footer';
function CreateRoom() {
  const navigate = useNavigate();
  const addroom = async (value) => {
    await createService(value)
    navigate("/service")
  } 
    return (
      <div>
        <Header />
      <Formik
        initialValues={{
          serviceName: "Room",
          area: "",
          rentalCost: "",
          maxCapacity: "",
          rentalType: "",
          freeServices: "",
          img: ""
        }}
        validationSchema={Yup.object({
          area: Yup.number()
            .required("Area cannot is empty")
            .min(1, "Area should more than 0!"),
          rentalCost: Yup.string().required("Rental cost cannot is empty"),
          maxCapacity: Yup.string().required("Capacity cannot is empty")
        
        })}
        onSubmit={(values) => {
          addroom(values)
        }}>
        <div className="container px-5 my-5">
          <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
            <div className="form-floating mb-3">

              <Field
                className="form-control"
                id="area"
                name="area"
                type="text"
                placeholder="Area"
                data-sb-validations=""
              />
              <ErrorMessage className="text-danger" name="area" component='span'></ErrorMessage>
              <label htmlFor="area">Area</label>
            </div>
            <div className="form-floating mb-3">

              <Field
                className="form-control"
                id="rentalCost"
                name="rentalCost"
                type="text"
                placeholder="Rental Cost"
                data-sb-validations=""
              />
              <ErrorMessage className="text-danger" name="rentalCost" component='span'></ErrorMessage>
              <label htmlFor="rentalCost">Rental Cost</label>
            </div>
            <div className="form-floating mb-3">

              <Field
                className="form-control"
                id="capacity"
                name="maxCapacity"
                type="text"
                placeholder="Capacity"
                data-sb-validations=""
              />
              <ErrorMessage className="text-danger" name="maxCapacity" component='span'></ErrorMessage>
              <label htmlFor="capacity">Capacity</label>
            </div>
            <div className="form-floating mb-3">

              <Field
                className="form-control"
                id="capacity"
                name="freeService"
                type="text"
                placeholder="Capacity"
                data-sb-validations=""
              />
              <ErrorMessage className="text-danger" name="freeService" component='span'></ErrorMessage>
              <label htmlFor="capacity">Free Services</label>
            </div>
            <div className="form-floating mb-3">

              <Field as="select"
                className="form-control"
                id="rentalType"
                name="rentalType"
                data-sb-validations=""
              >  <option className="option" value="">
                  --Choose--
                </option>
                <option className="option" value="date" >
                  Date
                </option>
                <option className="option" value="week">
                  Week
                </option>
                <option className="option" value="month">
                  Month
                </option>
                <option className="option" value="year">
                  Year
                </option></Field>
              <ErrorMessage className="text-danger" name="rentalType" component='span'></ErrorMessage>
              <label htmlFor="rentalType">Rental Type</label>
            </div>
            <div className="form-floating mb-3">

              <Field
                className="form-control"
                id="image"
                name="img"
                type="text"
                placeholder="Image"
                data-sb-validations=""
              />
              <ErrorMessage className="text-danger" name="img" component='span'></ErrorMessage>
              <label htmlFor="image">Image</label>
            </div>
            <div className="d-grid">
              <button
                className="btn btn-primary"
                id="submitButton"
                type="submit"
              >
                Submit
              </button>
            </div>
          </Form>
        </div>
      </Formik>
      <Footer />
    </div>
    );
}

export default CreateRoom;