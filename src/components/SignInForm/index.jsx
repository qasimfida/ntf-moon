"use client";

import { Typography, styled } from "@mui/material";
import {
  ImageWrapper,
  BackgroundImage,
  Wrapper,
  LogoWrapper,
  ImageTypo,
  StyledButton,
  QrCodeWrapper,
  QrCode,
  StyledSignInWrapper,
} from "./styles";
import Image from "next/image";

export const SignInForm = () => {
  return (
    <Wrapper container>
      <ImageWrapper item md={6}>
        <BackgroundImage>
          <ImageTypo variant="h1">
            A highly-curated platform for creating, collecting unique NFTs
          </ImageTypo>
        </BackgroundImage>
      </ImageWrapper>
      <StyledSignInWrapper item md={6}>
        <LogoWrapper>
          <Image src="/images/logo.png" alt="logo" width={60} height={60} />
        </LogoWrapper>
        <Typography variant="h1">Sign In</Typography>
        <Typography variant="body1" textAlign={"center"} mt={2}>
          Choose one of available wallet providers or create a new wallet. What
          is a wallet?
        </Typography>
        <StyledButton variant="outlined" color="grey">
          <Image
            src="/images/button-logo.png"
            alt="Button-logo"
            width={26}
            height={26}
          />
          Xumm
        </StyledButton>
        <Typography variant="body1" textAlign={"center"} mt={2}>
          Scan QR code with a WalletConnect-compatible wallet
        </Typography>
        <QrCodeWrapper>
          <QrCode>
            <Image
              src="/images/Qr-code.png"
              alt="Qr-code"
              width={288}
              height={288}
            />
          </QrCode>
        </QrCodeWrapper>
      </StyledSignInWrapper>
    </Wrapper>
  );
};
