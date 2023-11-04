"use client";
import { Box, Typography, styled } from "@mui/material";
import { Input } from "../Input";

export const Wrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(8.3),
  backgroundColor: theme.palette.grey[400],
  ".mt_16": {
    marginTop: theme.spacing(2),
  },
  ".mt_40": {
    marginTop: theme.spacing(5),
  },
}));
export const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
}));
export const StyledInput = styled(Input)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));
export const IconsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: theme.spacing(1),
  gap: theme.spacing(2),
}));
export const IconWrapper = styled("a")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
  cursor: "pointer",
  backgroundColor: theme.palette.common.black,
  padding: theme.spacing(1.3),
  svg: {
    color:
      theme.palette.mode === "dark"
        ? theme.palette.common.white
        : theme.palette.common.white,
    width: "34px",
    height: "34px",
  },
}));
export const SubHeading = styled("a")(({ theme }) => ({
  display: "flex",
  alignItems: "column",
  justifyContent: "start",
  cursor: "pointer",
  fontWeight: 700,
  fontSize: "0.875rem",
  color: theme.palette.grey[800],
  marginBottom: theme.spacing(1.3),
  "&:hover": {
    textDecoration: "underline",
  },
}));
export const PowerDescription = styled(Typography)(({ theme }) => ({
  cursor: "auto",
  fontWeight: 400,
  fontSize: "0.875rem",
  color: theme.palette.grey[800],
}));
export const CopyRight = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(4.3, 4),
  marginTop: theme.spacing(9),
  borderTop: `1px solid ${theme.palette.grey[900]}`,
}));
export const MainText = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2.8),
}));
export const StyledTypo = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "0.75rem",
}));
export const LanguageWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2.8),
}));
export const YearTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "0.75rem",
  color: theme.palette.grey[800],
}));
export const Circle = styled(Typography)(({ theme }) => ({
  width: "46px",
  height: "46px",
  borderRadius: "50%",
  border: `1px solid ${theme.palette.grey[900]} `,
}));
