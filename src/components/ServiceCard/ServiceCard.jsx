"user client";

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
  const { image, title, description, id } = service;
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
        <Link href={`/services/${id}`}>
          <StyledButton variant="text">See more details</StyledButton>
        </Link>
      </CardContent>
    </Wrapper>
  );
};
