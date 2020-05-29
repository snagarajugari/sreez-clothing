import React, { Component } from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle, auth } from "../firebase/firebase.utils";
import { SignInContainer, SignInTitle } from "./sign-in.styles";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  onSubmitHandler = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
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
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
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
          <div className="buttons">
            <CustomButton type="submit" onClick={this.onSubmitHandler}>
              Sign In
            </CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
