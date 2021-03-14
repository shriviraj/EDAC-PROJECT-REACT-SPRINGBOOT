import { useState } from "react";
//import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import "./Form.css";
import Login from "./Login";
import LoginSuccess from "./LoginSuccess";

const FormSuccess = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whoIsThis, setWhoIsThis] = useState("user");
  function submitForm(val, who) {
    setIsSubmitted(val);
    console.log("inside form" + val + who);
    setWhoIsThis(who);
  }
  return (
    <div className="form-content-right">
      <h1 className="form-success">We have received your request!</h1>
      <Container>
        {!isSubmitted ? (
          <Login submitForm={submitForm} />
        ) : (
          <LoginSuccess whoIsThis={whoIsThis} />
        )}
      </Container>
    </div>
  );
};

export default FormSuccess;
