import React from "react";

function EditService() {
    return (
        <>
      <div>
        <h1 style={{textAlign: 'center'}}>Edit new service of Furama</h1>
        <div className="formbold-main-wrapper">
          <div className="formbold-form-wrapper">
            <form action="service.html">
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
              <div>
                <label htmlFor="message" className="formbold-form-label"> Describe </label>
                <textarea rows={6} name="message" id="message" placeholder="Type your message" className="formbold-form-input" defaultValue={""} />
              </div>
              <div className="form-group">
                <label htmlFor="thumbnailURL">Up Image:</label>
                <input type="hidden" id="thumbnailURL"/>
                <input id="btnThumbnailURL" type="file" className="form-control" />
                <progress id="uploader" value={0} max={100}>0%</progress>
              </div>
              <button className="formbold-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
        </>
    )
}
export default EditService;