"use client";
import { Box, Typography, styled } from "@mui/material";

export const MainBox = styled(Box)(({ theme: { palette, breakpoints } }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  margin: "8px 0px",
  width: "100%",
  paddingBottom: "16px",
}));

export const SettingLabel = styled(Typography)(
  ({ theme: { palette, breakpoints } }) => ({
    fontSize: "14px",
    fontWeight: "bold",
    color: palette.text.primary,
  })
);

export const StyledTextArea = styled("textarea")(
  ({ theme: { palette, breakpoints } }) => ({
    width: "100%",
    height: "100px",
    background: "transparent",
    border: "none",
    backgroundColor: palette.common.white,
    color: palette.text.primary,
    fontSize: "14px",
    borderRadius: "10px",
    padding: "8px 12px",
    fontWeight: "bold",
    resize: "none",
    "&:focus": {
      outline: "none",
    },
  })
);
