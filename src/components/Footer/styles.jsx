"use client";
import { Box, Typography, styled } from "@mui/material";
import { Input } from "../Input";

export const Wrapper = styled(Box)(({ theme }) => ({
  paddingTop: "66px",
  backgroundColor: theme.palette.mode == "dark" ? "#181818" : "#F5F8F8",
}));

export const Heading = styled(Typography)(({ theme: { palette } }) => ({
  fontWeight: 700,
  color: palette.common.black,
  marginBottom: "14px",
}));
export const StyledInput = styled(Input)(({ theme }) => ({
  marginTop: theme.spacing(1.3),
  height: "40px",
  minWidth: "300px",
  marginBottom: theme.spacing(4),
}));
export const IconsWrapper = styled(Box)(({ theme: { spacing } }) => ({
  display: "flex",
  marginTop: spacing(1),
  gap: spacing(2),
}));
export const IconWrapper = styled("a")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "14px",
  cursor: "pointer",
  backgroundColor: theme.palette.common.black,
  padding: theme.spacing(1),
  svg: {
    color:
      theme.palette.mode === "dark"
        ? theme.palette.common.white
        : theme.palette.common.white,
    width: "34px",
    height: "34px",
  },
}));
export const SubHeading = styled("a")(({ theme: { palette, spacing } }) => ({
  display: "flex",
  alignItems: "column",
  justifyContent: "start",
  cursor: "pointer",
  fontWeight: 700,
  fontSize: "0.875rem",
  color: palette.grey[800],
  marginBottom: spacing(1.3),
  "&:hover": {
    textDecoration: "underline",
  },
}));
export const PowerDescription = styled(Typography)(
  ({ theme: { palette } }) => ({
    cursor: "auto",
    fontWeight: 400,
    fontSize: "0.875rem",
    color: palette.grey[800],
  })
);
export const CopyRight = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "70px",
  gap: theme.spacing(2),
  padding: theme.spacing(3, 4),
  marginTop: theme.spacing(9),
  borderTop: `1px solid ${theme.palette.grey[900]}`,
  flexWrap: "wrap",
}));
export const MainText = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2.8),
  flexWrap: "wrap",
}));
export const StyledTypo = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.common.black,
  fontSize: "12px",
  fontWeight: 700,
}));
export const LanguageWrapper = styled(Box)(({ theme: { spacing } }) => ({
  display: "flex",
  alignItems: "center",
  gap: spacing(2.8),
}));
export const YearTypography = styled(Typography)(({ theme: { palette } }) => ({
  fontWeight: 500,
  color: palette.grey[800],
}));
export const Circle = styled(Typography)(({ theme: { palette } }) => ({
  width: "46px",
  height: "46px",
  borderRadius: "50%",
  border: `1px solid ${palette.grey[900]} `,
}));
