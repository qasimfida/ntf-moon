import React from "react";
import { StyledTextField } from "./styles";

export const Input = ({ variant, placeholder, ...rest }) => {
  return (
    <StyledTextField
      {...rest}
      id="outlined-basic"
      variant={variant}
      placeholder={placeholder}
    />
  );
};
