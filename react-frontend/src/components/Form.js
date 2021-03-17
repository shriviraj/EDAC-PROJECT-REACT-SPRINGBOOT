import React, { useState } from "react";
import FormSignup from "./FormSignup";
import Navbar from "./Navbar/Navbar"
import FormSuccess from "./FormSuccess";
import "./Form.css";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
    <Navbar/>
      <div className="form-container">
        <div className="form-content-left">
          {/* <img src="img/logo2.jpg" className="form-img" /> */}
          <div className="form-Educate">EducateNow</div>
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
