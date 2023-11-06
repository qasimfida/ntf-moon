"use client";
import { Box, Checkbox, Typography, styled } from "@mui/material";

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

export const CheckMainBox = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    width: "100%",
  })
);

export const StyledCheckbox = styled(Checkbox)(
  ({ theme: { palette, breakpoints } }) => ({
    width: "20px",
    color: palette.primary.main,
    "&.Mui-checked": {
      color: "#7A52F4",
      "& .mui-theme-1hjwbh6-MuiSvgIcon-root": {
        color: "none",
      },
      "& .MuiSvgIcon-root": {
        color: "#7A52F4",
      },
    },
  })
);
