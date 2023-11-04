"use client";
import { Box, Typography, styled } from "@mui/material";
import { Input } from "../Input";

export const Wrapper = styled(Box)(({ theme: { palette, spacing } }) => ({
  paddingTop: spacing(8.3),
  backgroundColor: palette.grey[400],
  ".mt_16": {
    marginTop: spacing(2),
  },
  ".mt_40": {
    marginTop: spacing(5),
  },
}));
export const Heading = styled(Typography)(({ theme: { palette } }) => ({
  fontWeight: 700,
  color: palette.common.black,
}));
export const StyledInput = styled(Input)(({ theme: { spacing } }) => ({
  marginTop: spacing(3),
}));
export const IconsWrapper = styled(Box)(({ theme: { spacing } }) => ({
  display: "flex",
  marginTop: spacing(1),
  gap: spacing(2),
}));
export const IconWrapper = styled("a")(({ theme: { palette, spacing } }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
  cursor: "pointer",
  backgroundColor: palette.common.black,
  padding: spacing(1.3),
  svg: {
    color:
      palette.mode === "dark" ? palette.common.white : palette.common.white,
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
export const CopyRight = styled(Box)(({ theme: { palette, spacing } }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: spacing(4.3, 4),
  marginTop: spacing(9),
  borderTop: `1px solid ${palette.grey[900]}`,
}));
export const MainText = styled(Box)(({ theme: { spacing } }) => ({
  display: "flex",
  gap: spacing(2.8),
}));
export const StyledTypo = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.common.black,
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
