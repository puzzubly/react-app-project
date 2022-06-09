import React, { useState, useEffect } from "react";
import "./Contact.css";
// import Axios from "Axios";

function Contact() {
  const initialValues = { firstname: "", lastname: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!values.firstname) {
      errors.firstname = "^ first name is required";
    }
    if (!values.lastname) {
      errors.lastname = "^ last name is required";
    }
    if (!values.email) {
      errors.email = "^ email is required";
    } else if (!regex.test(values.email)){
      errors.email = " ^ this is not a valid email format";
    }
    
    return errors;
  };

  return (
    <div className="background">
      {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="ui message success">Sumbitted successfully!</div>
      ) : (
         <pre className="pre">{JSON.stringify(formValues, undefined, 2)}</pre>

      )}
  
      <form onSubmit={handleSubmit}>
        <div className="form-wrap">
          <div className="form-container">
            <div className="form-container-inner-wrap">
              <p className="contact-form-heading">Like to know more? </p>
              <div className="input-wrap">
                <input
                  className="input"
                  name="firstname"
                  type="text"
                  placeholder="first name"
                  value={formValues.firstname}
                  onChange={handleChange}
                  id=""
                />
                <p className="error-message">{formErrors.firstname}</p>
              </div>

              <div className="input-wrap">
                <input
                  className="input"
                  name="lastname"
                  type="text"
                  placeholder="last name"
                  value={formValues.lastname}
                  onChange={handleChange}
                  id=""
                />
                <p className="error-message">{formErrors.lastname}</p>
              </div>

              <div className="input-wrap">
                <input
                  className="input"
                  name="email"
                  type="text"
                  placeholder="email address"
                  value={formValues.email}
                  onChange={handleChange}
                  id=""
                />
                <p className="error-message">{formErrors.email}</p>
              </div>

              <div className="input-wrap">
                <textarea
                  className="textarea"
                  name="message"
                  type="text"
                  placeholder="message"
                  onChange={handleChange}
                  id=""
                />
              </div>
              <button className="contact-form-button">SUBMIT</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
