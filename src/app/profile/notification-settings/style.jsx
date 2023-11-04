"use client";
import { Box, Typography, styled } from "@mui/material";

export const SubText = styled(Typography)(
  ({ theme: { palette, breakpoints } }) => ({
    fontSize: "16px",
    color: palette.text.primary,
  })
);

export const SettingsMainBox = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    display: "flex",
    flexDirection: "column",
    backgroundColor: palette.grey[1000],
    margin: "16px 0px 30px 0px",
    padding: "24px",
    borderRadius: "16px",
  })
);

export const ButtonsMainBox = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    width: "100%",
    display: "flex",
    margin: "24px 0px",
    justifyContent: "space-between",
    gap: "16px",
    flexWrap: "wrap-reverse",
  })
);
