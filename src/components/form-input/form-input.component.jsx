import React from "react";
import {
  FormGroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./form-input.styles";

const FormInput = ({ onChangeHandler, label, ...props }) => (
  <FormGroupContainer>
    <FormInputContainer onChange={onChangeHandler} {...props} />
    {label ? (
      <FormInputLabel className={props.value.length ? "shrink" : ""}>
        {label}
      </FormInputLabel>
    ) : (
      ""
    )}
  </FormGroupContainer>
);

export default FormInput;
