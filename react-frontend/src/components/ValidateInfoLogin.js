
export default function ValidateInfoLogin(values) {
    let errors = {};
  
   
  
    if (!values.email) {
      errors.email = 'Email required';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
    
    return errors;
  }