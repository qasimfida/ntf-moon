import { Typography } from "@mui/material";
import React from "react";
import { Wrapper } from "./styles";

export const CommonBanner = ({ title = "No Value", subtitle }) => {
  return (
    <Wrapper>
      <Typography variant="h1">
        {title} <br /> {subtitle}
      </Typography>
    </Wrapper>
  );
};
