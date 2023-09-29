import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { createService } from '../../service/FacilityService';
import * as Yup from 'yup'
import Header from '../simple/Header';
import Footer from '../simple/Footer';
function CreateHouse() {
  const navigate = useNavigate();
  const addHouse = async (value) => {
    await createService(value)
    navigate("/service")
  } 
    return (
      <div>
        <Header></Header>
      <Formik
        initialValues={{
          serviceName: "Vila",
          area: "",
          rentalCost: "",
          maxCapacity: "",
          roomStandaard: "",
          amenities: "",
          floors: "",
          rentalType: "",
          img: ""
        }}
        validationSchema={Yup.object({
          area: Yup.number()
            .required("Area can not empty")
            .min(1, "Area more than 0!"),
          rentalCost: Yup.string().required("Rental cost can not empty"),
          maxCapacity: Yup.string().required("Capacity can not empty"),
          floors: Yup.number()
            .required("Floors cannot is empty")
            .min(1, "Floors should geather than 0!")
        })}
        onSubmit={(values) => {
          addHouse(values)
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
                id="roomStandard"
                name="roomStandard"
                type="text"
                placeholder="Room Standard"
                data-sb-validations=""
              />
              <ErrorMessage className="text-danger" name="roomStandard" component='span'></ErrorMessage>
              <label htmlFor="roomStandard">Room Standard</label>
            </div>
            <div className="form-floating mb-3">

              <Field
                className="form-control"
                id="amenities"
                name="amenities"
                type="text"
                placeholder="Amenities"
                data-sb-validations=""
              />
              <ErrorMessage className="text-danger" name="amenities" component='span'></ErrorMessage>
              <label htmlFor="amenities">Amenities</label>
            </div>
            <div className="form-floating mb-3">

              <Field
                className="form-control"
                id="floors"
                name="floors"
                type="text"
                placeholder="Floors"
                data-sb-validations=""
              />
              <ErrorMessage className="text-danger" name="floors" component='span'></ErrorMessage>
              <label htmlFor="floors">Floors</label>
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

export default CreateHouse;