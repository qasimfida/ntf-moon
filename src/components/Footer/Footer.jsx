"use client";
import useGetActiveTheme from "@/hooks/useGetActiveTheme";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import {
  FollowCard,
  Input,
  StyledColumn,
  StyledFooter,
  StyledLink,
} from "./styles";
import Image from "next/image";

const Footer = () => {
  const themeMode = useGetActiveTheme();
  const [value, setValue] = React.useState("");
  return (
    <StyledFooter>
      <Container>
        <Grid container spacing={2}>
          <StyledColumn item xs={12} sm={6} md={3}>
            <Typography
              variant="body2"
              color={themeMode === "light" ? "#000" : "#fff"}
            >
              Subscribe for Updates
            </Typography>
            <Input
              placeholder="Entyer your e-mail"
              className="searchInput"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </StyledColumn>
          <StyledColumn item xs={12} sm={6} md={3}>
            <Typography
              variant="body2"
              color={themeMode === "light" ? "#000" : "#fff"}
            >
              MarketPlace
            </Typography>
            <StyledLink href="#">Explore</StyledLink>
            <StyledLink href="#">Become a Partner</StyledLink>
            <StyledLink href="#">About Us</StyledLink>
          </StyledColumn>
          <StyledColumn item xs={12} sm={6} md={3}>
            <Typography
              variant="body2"
              color={themeMode === "light" ? "#000" : "#fff"}
            >
              Community
            </Typography>
            <StyledLink href="#">Profile</StyledLink>
            <StyledLink href="#">My Collection</StyledLink>
          </StyledColumn>
          <StyledColumn item xs={12} sm={6} md={3}>
            <Typography
              variant="body2"
              color={themeMode === "light" ? "#000" : "#fff"}
            >
              Powered by Moon Studios
            </Typography>
            <Typography
              variant="body2"
              color={themeMode === "light" ? "#000" : "#fff"}
            >
              Bridging the gap between the real world and web 3.0
            </Typography>
          </StyledColumn>
        </Grid>
        <Grid
          container
          spacing={2}
          color={themeMode === "light" ? "#000" : "#fff"}
        >
          <StyledColumn item xs={12} sm={6} md={3}>
            <Typography
              variant="body1"
              fontWeight={"bold"}
              color={themeMode === "light" ? "#000" : "#fff"}
            >
              Follow us
            </Typography>
            <Box display={"flex"} flexDirection={"row"}>
              <FollowCard>
                {themeMode === "light" ? (
                  <Image
                    src={"/public/images/whiteDiscordIcon.png"}
                    width={40}
                    height={40}
                  />
                ) : (
                  <Image
                    src={"/public/images/blackDiscordIcon.png"}
                    width={40}
                    height={40}
                  />
                )}
              </FollowCard>
              <FollowCard>
                {themeMode === "light" ? (
                  <Image
                    src={"/public/images/whiteTwitterIcon.png"}
                    width={40}
                    height={40}
                  />
                ) : (
                  <Image
                    src={"/public/images/blackTwitterIcon.png"}
                    width={40}
                    height={40}
                  />
                )}
              </FollowCard>
              <FollowCard>
                {themeMode === "light" ? (
                  <Image
                    src={"/public/images/whiteInternetIcon.png"}
                    width={40}
                    height={40}
                  />
                ) : (
                  <Image
                    src={"/public/images/blackInternetIcon.png"}
                    width={40}
                    height={40}
                  />
                )}
              </FollowCard>
            </Box>
          </StyledColumn>
        </Grid>
      </Container>
      <Box
        borderTop={1}
        borderColor="grey.500"
        minHeight={85}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingX={2}
        width="100%"
        mt={14}
      >
        <Box display="flex" alignItems="center">
          <Typography
            variant="body2"
            fontWeight={"bold"}
            color={themeMode === "light" ? "#000" : "#fff"}
          >
            Privacy Policy
          </Typography>
          <Typography
            variant="body2"
            fontWeight={"bold"}
            color={themeMode === "light" ? "#000" : "#fff"}
            marginLeft={2}
          >
            License
          </Typography>
          <Typography
            variant="body2"
            fontWeight={"bold"}
            color={themeMode === "light" ? "#000" : "#fff"}
            marginLeft={2}
          >
            API
          </Typography>
          <Typography variant="body2" color={"gray"} marginLeft={2}>
            @ 2021 All rights reserved
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Typography
            variant="body2"
            fontWeight={"bold"}
            color={themeMode === "light" ? "#000" : "#fff"}
          >
            English
          </Typography>
          <Box
            height={40}
            width={40}
            border={`1px solid ${themeMode == "light" ? "#000" : "#fff"}`}
            borderRadius={100}
            ml={1}
          />
        </Box>
      </Box>
    </StyledFooter>
  );
};

export default Footer;
