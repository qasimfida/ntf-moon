"user client";

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
import Link from "next/link";

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
        <Link href={`/services/${title.replace(/ /g, "-")}`}>
          <StyledButton variant="text">See more details</StyledButton>
        </Link>
      </CardContent>
    </Wrapper>
  );
};
