import React from "react";
import validate from "./ValidateInfoLogin";
import "./Form.css";
import useLogin from "./useLogin";

const Login = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useLogin(
    submitForm,
    validate
  );

  return (
    <div className="LoginData">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div className="form-inputs">
          <label className="form-label">Email</label>
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
          <label className="form-label">Password</label>
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
