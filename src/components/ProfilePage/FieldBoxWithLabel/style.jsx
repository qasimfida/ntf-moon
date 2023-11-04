"use client";
import { Box, Typography, styled } from "@mui/material";

export const MainBox = styled(Box)(({ theme: { palette, breakpoints } }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  margin: "8px 0px",
  width: "100%",
  paddingBottom: "16px",
  borderBottom:
    palette.mode === "light" ? "1px solid #CFDBD5" : "1px solid #EBF0F01A",
}));

export const SettingLabel = styled(Typography)(
  ({ theme: { palette, breakpoints } }) => ({
    fontSize: "14px",
    fontWeight: "bold",
    color: palette.text.primary,
  })
);
