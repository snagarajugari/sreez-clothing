import React, { Component } from "react";
import "./sign-in.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  onChangeHandler = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.onSubmitHandler}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="email"
            onChangeHandler={this.onChangeHandler}
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            onChangeHandler={this.onChangeHandler}
            required
          />

          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
