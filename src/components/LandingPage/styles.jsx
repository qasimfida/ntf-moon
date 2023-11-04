"use client";

import { Box, Button, Container } from "@mui/material";
import { styled } from "@mui/system";

export const StyledContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(/images/carousel.png)`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  flexDirection: "column",
  width: "100%",
  backgroundColor: "#000",
  height: "60vh",
  borderRadius: 10,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "60vh",
    borderRadius: 10,
  },
}));

export const WalletButton = styled(Button)(({ theme }) => ({
  width: "96px",
  height: "36px",
  backgroundColor: "#E4DCFD",
  color: "#7A52F4",
  top: "100px",
  left: "50%",
  transform: "translateX(-50%)",

  [theme.breakpoints.down("sm")]: {
    width: "96px",
    height: "36px",
  },
}));
export const ExpandAllButton = styled(Button)(({ theme }) => ({
  width: "133px",
  height: "46px",
  backgroundColor: "#7A52F4",
  color: "#fff",

  [theme.breakpoints.down("sm")]: {
    width: "133px",
    height: "46px",
  },
}));

export const ViewMintDetailsButton = styled(Button)(({ theme }) => ({
  width: "193px",
  height: "46px",
  backgroundColor: "#7A52F4",
  color: "#fff",
  top: "53px",
  left: "50%",
  transform: "translateX(-50%)",

  [theme.breakpoints.down("sm")]: {
    width: "193px",
    height: "46px",
  },
}));
