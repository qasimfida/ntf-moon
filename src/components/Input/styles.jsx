"use client";
import { TextField, styled } from "@mui/material";

export const StyledTextField = styled(TextField)({
  height: "48px",
  "& .MuiInputBase-root": {
    borderRadius: "24px",
    fontWeight: 700,
  },
  "& .mui-theme-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    boxSizing: "border-box",
    padding: "12px 16px",
    height: "44px",
    fontSize: "13px",
  },
});
