import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function CreateContact() {

    return (
      <>
      <Header />
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
          {/*  contact */}
          <div className="contact">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <form id="request" className="main_form">
                    <div className="row">
                      <div className="col-md-12 ">
                        <input className="contactus" placeholder="Contract number" type="number" name="Contract number" />
                      </div>
                      <div className="col-md-12">
                        <input className="contactus" placeholder="Email" type="date" name="Day start" />
                      </div>
                      <div className="col-md-12">
                        <input className="contactus" placeholder="Phone Number" type="date" name="Day end" />
                      </div>
                      <div className="col-md-12">
                        <input className="contactus" placeholder="down payment" type="number" />Down Payment
                      </div>
                      <div className="col-md-12">
                        <input className="contactus" placeholder="Total amount" type="number" />Total amount
                      </div>
                      <div className="col-md-12">
                        <button className="send_btn">Send</button>
                      </div>
                    </div>
                  </form>
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
      <Footer/>
      </>
        
      );
}
export default CreateContact;