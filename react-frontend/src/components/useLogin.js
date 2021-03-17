import { useState, useEffect } from "react";
import BASE_URL from "./../services/UserService";
import axios from "axios";
import { toast } from "react-toastify";

const useLogin = (callback, validate) => {
  let res;
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  //const [ok, setok] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    getDataFromServer(values);

    console.log(values);
  };

  const getDataFromServer = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;

    axios
      .post(
        `${BASE_URL}/login`,
        {},
        { params: { email, password } },
        { headers: { "Access-Control-Allow-Origin": "*" } }
      )
      .then(
        (response) => {
          console.log(response);
          console.log("success");
          console.log(response.data);
          // renderComponentLogin(response.data);
          res = response.data;
          //let resp = response.data;
          callback(true, res);
        },
        (error) => {
          console.log(error);
          console.log("error");
          callback(false, "");
          toast.error("Error");
        }
      );
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(true, res);
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useLogin;
