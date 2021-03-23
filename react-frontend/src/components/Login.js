import React, { useContext } from "react";
import validate from "./ValidateInfoLogin";
import "./Form.css";
import useLogin from "./useLogin";
import { AppContext } from "./../App";

const Login = ({ submitForm }) => {
  const { settingTempMail } = useContext(AppContext);
  const { handleChange, handleSubmit, values, errors } = useLogin(
    submitForm,
    validate
  );

  settingTempMail(values.email);

  return (
    <div className="LoginData">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div className="form-inputs">
          <label className="login-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        {errors.email && <p>{errors.email}</p>}
        <div className="form-inputs">
          <label className="login-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        {errors.password && <p>{errors.password}</p>}
        <button className="form-input-btn" type="submit">
          login
        </button>
      </form>
    </div>
  );
};

export default Login;
