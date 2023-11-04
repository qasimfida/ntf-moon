"use client";
import { Box, Button, Typography, styled } from "@mui/material";

export const MainBox = styled(Box)(({ theme: { palette, breakpoints } }) => ({
  backgroundColor: palette.common.white,
  minHeight: "calc(100vh - 84px)",
  padding: "1rem",
  [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
    padding: "2rem",
  },
}));

export const MainHeading = styled(Typography)(
  ({ theme: { palette, breakpoints } }) => ({
    fontSize: "42px",
    fontStyle: "normal",
    fontFamily: "inherit",
    fontWeight: 800,
    lineHeight: "normal",
    color: palette.text.primary,
    marginBottom: "1rem",
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      // fontSize: "3rem",
    },
  })
);

export const FilterButton = styled(Button)(
  ({ theme: { palette, breakpoints } }) => ({
    backgroundColor: palette.common.white,
    color: palette.common.black,
    padding: "9px 16px",
    borderRadius: "24px",
    textTransform: "none",
    fontSize: "12px",
    fontWeight: 700,
    fontStyle: "normal",
    height: "36px",
    lineHeight: "18px",
    boxShadow: "none",
    border: `1px solid ${palette.borderColor.primary}`,
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      // fontSize: "1.25rem",
    },
    "&:hover": {
      color: "white",
      boxShadow: "none",
    },
  })
);

export const FilterDaysButton = styled(Button)(
  ({ theme: { palette, breakpoints } }) => ({
    backgroundColor: palette.common.white,
    color: palette.common.black,
    padding: "9px 16px",
    borderRadius: "24px",
    textTransform: "none",
    fontSize: "12px",
    fontWeight: 700,
    fontStyle: "normal",
    height: "36px",
    lineHeight: "18px",
    boxShadow: "none",
    border: `1px solid ${palette.borderColor.primary}`,
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      // fontSize: "1.25rem",
    },
    "&:hover": {
      color: palette.primary.dark,
      border: `1px solid ${palette.primary.light}`,
      backgroundColor: palette.primary.light,
      boxShadow: "none",
    },
    "&.active": {
      color: "white",
      backgroundColor: palette.primary.main,
      border: "none",
    },
  })
);

export const FilterBox = styled(Box)(({ theme: { palette, breakpoints } }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1rem",
  "&& > div": {
    display: "flex",
    gap: "6px",
  },
  [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
    marginBottom: "2rem",
  },
}));

export const StyledBox = styled(Box)(({ theme: { palette, breakpoints } }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1rem",
  [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
    marginBottom: "2rem",
  },
}));

export const TableBoxMain = styled(Box)(
  ({ theme: { palette, breakpoints } }) => ({
    overflowX: "auto",
    width: "100%",
  })
);

export const TableBox = styled(Box)(({ theme: { palette, breakpoints } }) => ({
  minWidth: 940,
  overflowX: "auto",
  width: "100%",
}));

export const Table = styled(Box)(({ theme: { palette, breakpoints } }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",

  [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
    gap: "8px",
  },
}));

export const Row = styled(Box)(({ theme: { palette, breakpoints } }) => ({
  display: "flex",
  gap: 18,
  alignItems: "center",
  minHeight: "68px",
  borderRadius: "8px",
  padding: "10px 16px",
  border: `1px solid ${palette.borderColor.primary}`,
  [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
    flexDirection: "row",
  },
  "&& > div:nth-child(1)": {
    // minWidth: 250,
    width: "30%",
    // maxWidth: "40%",
    display: "flex",
    alignItems: "center",
    gap: "18px",
  },
  "&& > div:nth-child(2), && > div:nth-child(5)": {
    // minWidth: 130,
    width: "15%",
    // maxWidth: 150,
    display: "flex",
    alignItems: "center",
    gap: "11px",
  },
  "&& > div:nth-child(3)": {
    // minWidth: 70,
    width: "10%",
  },
  "&& > div:nth-child(3) > h3": {
    color: palette.text.red,
  },
  "&& > div:nth-child(4)": {
    width: "10%",
  },
  "&& > div:nth-child(4) > h3": {
    color: palette.text.green,
  },
  "&& > div:nth-child(6), && > div:nth-child(7)": {
    width: "10%",
  },
  "&& > div:nth-child(6) > h3, && > div:nth-child(7) > h3": {
    fontWeight: 400,
  },
}));

export const RowText = styled(Typography)(
  ({ theme: { palette, breakpoints } }) => ({
    color: palette.text.primary,
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "21px",
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      // fontSize: "1.25rem",
    },
  })
);

export const TableHead = styled(Box)(({ theme: { palette, breakpoints } }) => ({
  display: "flex",
  gap: 18,
  alignItems: "center",
  padding: "10px 16px",
  [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {},

  "&& > div": {
    width: "10%",
  },
  "&& > div:nth-child(1)": {
    width: "30%",
  },
  "&& > div:nth-child(2), && > div:nth-child(5)": {
    width: "15%",
  },
}));

export const TableHeadText = styled(Typography)(
  ({ theme: { palette, breakpoints } }) => ({
    color: palette.text.primary,
    fontFamily: "Inter",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "18px",
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      // fontSize: "1.25rem",
    },
  })
);

export const LoadMoreButton = styled(Button)(
  ({ theme: { palette, breakpoints } }) => ({
    backgroundColor: palette.common.white,
    color: palette.common.black,
    padding: "9px 16px",
    borderRadius: "24px",
    textTransform: "none",
    fontSize: "12px",
    fontWeight: 700,
    fontStyle: "normal",
    height: "46px",
    width: "246px",
    lineHeight: "18px",
    boxShadow: "none",
    margin: "40px auto",
    display: "block",
    textAlign: "center",
    border: `1px solid ${palette.borderColor.primary}`,
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      // fontSize: "1.25rem",
    },
    "&:hover": {
      color: palette.primary.dark,
      border: `1px solid ${palette.primary.light}`,
      backgroundColor: palette.primary.light,
      boxShadow: "none",
    },
    "&.active": {
      color: "white",
      backgroundColor: palette.primary.main,
      border: "none",
    },
  })
);
