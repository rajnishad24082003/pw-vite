import React from "react";

const EnquiryForm = () => {
  return (
    <div className="form-wrap">
      <form method="POST" action="Pages/api_place_enquiry">
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Your Name
          </label>
          <input
            required
            type="text"
            name="name"
            className="form-control"
            id="exampleInputName"
            aria-describedby="nameHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputCompany" className="form-label">
            Company Name
          </label>
          <input
            required
            type="text"
            name="company_name"
            className="form-control"
            id="exampleInputCompany"
            aria-describedby="companyHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            required
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputContact" className="form-label">
            Contact Number
          </label>
          <input
            required
            type="text"
            name="contact"
            className="form-control"
            id="exampleInputContact"
            aria-describedby="contactHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputSoftware" className="form-label">
            Select Software
          </label>
          <select
            required
            name="software"
            className="form-control"
            id="exampleInputSoftware"
            aria-describedby="contactHelp"
          >
            <option value="HRMS on Cloud (SAAS)">HRMS on Cloud (SAAS)</option>
            <option value="Payroll Outsourcing">Payroll Outsourcing</option>
            <option value="Human Resource Management Software">
              Human Resource Management Software
            </option>
            <option value="Payroll Management Software">
              Payroll Management Software
            </option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputMessage" className="form-label">
            Write Your Message
          </label>
          <textarea
            name="message"
            className="form-control"
            id="exampleInputMessage"
            aria-describedby="messageHelp"
            rows="10"
          ></textarea>
        </div>
        <div className="mb-3">
          <input
            type="submit"
            name="enquiry_submit"
            value="Send Message"
            className="btn btn-theme-brand"
          />
          <input
            type="reset"
            value="Clear"
            className="btn btn-theme-light-accent"
          />
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
