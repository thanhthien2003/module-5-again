import React from "react";

function EditCustomer() {
    return (
        <>
            <div>
                <h1 style={{ textAlign: 'center' }}>Edit Customer</h1>
                <div className="formbold-main-wrapper">
                    <div className="formbold-form-wrapper">
                        <form action="customer.html">
                            <div className="formbold-input-flex">
                                <div>
                                    <label htmlFor="firstname" className="formbold-form-label"> Name </label>
                                    <input type="text" name="firstname" id="firstname" placeholder="Villa" className="formbold-form-input" />
                                </div>
                            </div>
                            <div className="formbold-input-flex">
                                <div>
                                    <label htmlFor="phone" className="formbold-form-label"> Phone </label>
                                    <input type="text" name="phone" id="phone" placeholder="(319) 555-0115" className="formbold-form-input" />
                                </div>
                            </div>
                            <div className="formbold-input-flex">
                                <div>
                                    <label>Gender:</label>
                                    <div style={{ textAlign: 'center' }} className="form-row">
                                        <div>
                                        </div>
                                        <div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gender" id="male" />
                                                <label className="form-check-label" htmlFor="male">Male</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gender" id="female" />
                                                <label className="form-check-label" htmlFor="female">Female</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="formbold-input-flex">
                                <div>
                                    <label htmlFor="citizen" className="formbold-form-label"> Citizen ID </label>
                                    <input type="text" name="citizen" id="citizen" placeholder={123456789} className="formbold-form-input" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="formbold-form-label"> Email </label>
                                <textarea rows={6} name="email" id="email" placeholder="Type your email" className="formbold-form-input" defaultValue={""} />
                            </div>
                            <div>
                                <label className="formbold-form-label"> type of customer </label>
                                <select>
                                    <option>Diamond</option>
                                    <option>Platinium</option>
                                    <option>Gold</option>
                                    <option>Silver</option>
                                    <option>Member</option>
                                </select>
                            </div>
                            <br />
                            <div className="formbold-input-flex">
                                <div>
                                    <label htmlFor="address" className="formbold-form-label"> Address </label>
                                    <input type="text" name="address" id="address" placeholder="123 Nguyen Van A" className="formbold-form-input" />
                                </div>
                            </div>
                            <div>
                                <button className="formbold-btn">
                                    Send Message
                                </button>
                            </div></form>
                    </div>
                </div>
            </div>
        </>
    )

}
export default EditCustomer;