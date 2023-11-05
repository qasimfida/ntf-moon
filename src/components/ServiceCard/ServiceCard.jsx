import { Button, Typography } from "@mui/material";
import React from "react";
import {
  CardContent,
  ImageWrapper,
  StyledButton,
  StyledDescription,
  StyledTitle,
  Wrapper,
} from "./styles";
import Image from "next/image";

export const ServiceCard = ({ service }) => {
  const { image, title, description } = service;
  return (
    <Wrapper>
      <CardContent>
        <ImageWrapper>
          <Image src={image} alt="Service" />
        </ImageWrapper>
        <StyledTitle variant="h3" component="h2">
          {title}
        </StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledButton variant="text">See more details</StyledButton>
      </CardContent>
    </Wrapper>
  );
};
