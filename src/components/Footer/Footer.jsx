import { Container, Grid } from "@mui/material";
import React from "react";
import {
  CopyRight,
  StyledTypo,
  Heading,
  IconWrapper,
  IconsWrapper,
  LanguageWrapper,
  PowerDescription,
  StyledInput,
  SubHeading,
  Wrapper,
  YearTypography,
  MainText,
  Circle,
} from "./styles";
import DiscordIcon from "../Svgs";
import { Language, Twitter } from "@mui/icons-material";

export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Grid container gap={4} justifyContent={"space-between"}>
          <Grid item md={4}>
            <Heading variant="h2">Subscribe for updates</Heading>
            <StyledInput placeholder={"Enter Your E-mail"} />
            <Heading variant="h2" className="mt_40">
              Follow Us
            </Heading>
            <IconsWrapper>
              <IconWrapper href="#">
                <DiscordIcon />
              </IconWrapper>
              <IconWrapper href="#">
                <Twitter />
              </IconWrapper>
              <IconWrapper href="#">
                <Language />
              </IconWrapper>
            </IconsWrapper>
          </Grid>
          <Grid item md={1.646}>
            <Heading variant="h2">Marketplace</Heading>
            <SubHeading href="#" className="mt_16">
              Explore
            </SubHeading>
            <SubHeading href="#">Become a Partner</SubHeading>
            <SubHeading href="#">About Us</SubHeading>
          </Grid>
          <Grid item md={1.646}>
            <Heading variant="h2">Community</Heading>
            <SubHeading href="#" className="mt_16">
              Profile
            </SubHeading>
            <SubHeading href="#">My Collections</SubHeading>
          </Grid>
          <Grid item md={3}>
            <Heading variant="h2">Powered by Moon Studios</Heading>
            <PowerDescription className="mt_16">
              Bridging the gap between the Real World and Web 3.0
            </PowerDescription>
          </Grid>
        </Grid>
      </Container>
      <CopyRight>
        <MainText>
          <StyledTypo>Privacy Policy</StyledTypo>
          <StyledTypo>License</StyledTypo>
          <StyledTypo>API</StyledTypo>
          <YearTypography variant="subtitle1">
            © 2021 All rights reserved
          </YearTypography>
        </MainText>
        <LanguageWrapper>
          <StyledTypo>English</StyledTypo>
          <Circle />
        </LanguageWrapper>
      </CopyRight>
    </Wrapper>
  );
};
