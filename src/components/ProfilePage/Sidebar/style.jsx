"use client";

import { Box, Button, Typography, styled } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minWidth: "256px",
  padding: "0px 9px 20px 9px",
}));

export const SidebarHeading = styled(Typography)(({ theme: { palette } }) => ({
  fontSize: "14px",
  marginBottom: "1rem",
  padding: "0 0.5rem",
  color: palette.grey[800],
}));

export const NavigationButton = styled(Button)(({ theme: { palette } }) => ({
  fontSize: "14px",
  minWidth: "238px",
  height: "56px",
  marginBottom: "0.3rem",
  padding: "17px 23px",
  borderRadius: "28px",
  color: palette.grey[900],
  justifyContent: "flex-start",
  textTransform: "none",
  fontWeight: "bolder",
  "&& > span > svg": {
    color: palette.grey[900],
  },
  "&:hover": {
    backgroundColor: palette.grey[1000],
    color: palette.inherit.main,
    "&& > span > svg": {
      color: palette.inherit.main,
    },
  },
}));
