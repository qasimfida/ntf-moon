import { StyledDescription, StyledTitle, Wrapper } from "./styles";

export const SimpleCard = ({ title, description, shadow, ...rest }) => {
  return (
    <Wrapper {...rest} shadow={shadow}>
      <StyledTitle variant="h3">{title}</StyledTitle>
      <StyledDescription variant="body2">{description}</StyledDescription>
    </Wrapper>
  );
};
