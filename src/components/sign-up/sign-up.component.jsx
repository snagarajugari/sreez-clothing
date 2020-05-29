import React, { Component } from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";
import { SignUpContainer, SignUpTitle } from "./sign-up.styles";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  onSubmitHandler = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("passwords do not match!");
      return;
    }
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    try {
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  onChangeHandler = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignUpContainer>
        <SignUpTitle>I do not have an account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.onSubmitHandler}>
          <FormInput
            name="displayName"
            type="text"
            value={this.state.displayName}
            label="displayName"
            onChangeHandler={this.onChangeHandler}
            required
          />
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
          <FormInput
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            label=" confirm password"
            onChangeHandler={this.onChangeHandler}
            required
          />
          <div className="buttons">
            <CustomButton type="submit" onClick={this.onSubmitHandler}>
              Sign Up
            </CustomButton>
          </div>
        </form>
      </SignUpContainer>
    );
  }
}

export default SignUp;
