import React, { Fragment, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    //formData are states, setFormData is used for doing setState 
    email: "",
    password: ""
  });

  const { email, password } = formData; //Instead of having to do formData.name, formData.email, etc.

  const onChange = function (e) {
    setFormData({ ...formData, [e.target.name]: e.target.value }); //get from formdata the name: "value", email: "value", etc 
  };

  const onSubmit = async function (e) {
    e.preventDefault(); 
    console.log('success');

  };

  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign In To Your Account
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}> 
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          /> 
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            required
            minLength="6"
          />
        </div> 
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  );
};

export default Login;
